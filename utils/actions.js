"use server";
import prisma from "@/utils/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
export async function getAllPendingInventions() {
  try {
    const inventions = await prisma.invention.findMany({
      orderBy: {
        creationDate: "desc",
      },
    });
    return inventions;
  } catch (error) {
    console.error("Error fetching pending inventions:", error);
    throw error;
  }
}

export async function createInvention(formData) {
  const { userId } = auth();
  const nameOfInventor = formData.get("nameOfInventor");
  const nameOfInvention = formData.get("nameOfInvention");
  const description = formData.get("description");

  await prisma.invention.create({
    data: {
      userId: userId,
      nameOfInventor,
      nameOfInvention,
      description,
      priceForApproval: 100,
      imagePath: "/",
      approvedDate: "2020-03-19T14:21:00+02:00",
    },
  });
  redirect("/approved-invention");
}

export async function denyInvention(formData) {
  const id = formData.get("id");
  await prisma.invention.delete({
    where: { id },
  });
  redirect("/admin");
  // revalidatePath("/admin");
}

export async function getInvention(id) {
  return prisma.invention.findUnique({
    where: { id },
  });
}

export async function payForInvention(id) {
  await prisma.invention.update({
    where: { id },
    data: {
      paidFor: true,
    },
  });
}

export async function approveInvention(formData) {
  const id = formData.get("id");
  const isApproved = formData.get("isApproved");
  await prisma.invention.update({
    where: { id },
    data: {
      isApproved: true,
    },
  });
  await prisma.sales.create({
    data: {
      salesId: id,
      january: 0,
      february: 0,
      march: 0,
      april: 0,
      may: 0,
      june: 0,
      july: 0,
      august: 0,
      september: 0,
      october: 0,
      november: 0,
      december: 0,
    },
  });
  redirect("/admin");
}

export async function findInvention(userId) {
  if (userId) {
    const approvedInvention = await prisma.invention.findMany({
      where: { userId },
    });
    return approvedInvention;
  }
}

export async function findSales(salesId) {
  if (salesId) {
    const foundSales = await prisma.sales.findUnique({
      where: { salesId },
    });
    return foundSales;
  }
}

export async function updateSales(formData) {
  const january = Number(formData.get("january"));
  const february = Number(formData.get("february"));
  const march = Number(formData.get("march"));
  const april = Number(formData.get("april"));
  const may = Number(formData.get("may"));
  const june = Number(formData.get("june"));
  const july = Number(formData.get("july"));
  const august = Number(formData.get("august"));
  const september = Number(formData.get("september"));
  const october = Number(formData.get("october"));
  const november = Number(formData.get("november"));
  const december = Number(formData.get("december"));
  const salesId = formData.get("salesId");
  await prisma.sales.update({
    where: { salesId },
    data: {
      january,
      february,
      march,
      april,
      may,
      june,
      july,
      august,
      september,
      october,
      november,
      december,
    },
  });
}
