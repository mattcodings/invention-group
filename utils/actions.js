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
  try {
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
  } catch (error) {
    console.error("Failed to create invention:", error);
    redirect("/error");
  }
}

export async function denyInvention(formData) {
  try {
    const id = formData.get("id");
    await prisma.invention.delete({
      where: { id },
    });
    redirect("/admin");
  } catch (error) {
    console.error("Failed to deny invention:", error);
  }
}

export async function getInvention(id) {
  try {
    return await prisma.invention.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error("Failed to get invention:", error);
  }
}

export async function payForInvention(id) {
  try {
    await prisma.invention.update({
      where: { id },
      data: { paidFor: true },
    });
  } catch (error) {
    console.error("Failed to pay for invention:", error);
  }
}

export async function approveInvention(formData) {
  try {
    const id = formData.get("id");
    const isApproved = formData.get("isApproved"); // Note: This variable isn't used.
    await prisma.invention.update({
      where: { id },
      data: { isApproved: true },
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
  } catch (error) {
    console.error("Failed to approve invention:", error);
    // Handle error
  }
}

export async function findInvention(userId) {
  try {
    if (userId) {
      const approvedInvention = await prisma.invention.findMany({
        where: { userId },
      });
      return approvedInvention;
    }
  } catch (error) {
    console.error("Failed to find invention:", error);
    // Handle error
  }
}

export async function findSales(salesId) {
  try {
    if (salesId) {
      const foundSales = await prisma.sales.findUnique({
        where: { salesId },
      });
      return foundSales;
    }
  } catch (error) {
    console.error("Failed to find sales:", error);
    // Handle error
  }
}

export async function updateSales(formData) {
  try {
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
  } catch (error) {
    console.error("Failed to update sales:", error);
  }
}
