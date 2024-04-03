"use server";
import prisma from "@/utils/db";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getAllPendingInventions = async () => {
  return await prisma.invention.findMany({
    orderBy: {
      creationDate: "desc",
    },
  });
};

export const createInvention = async (formData) => {
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
};

export const denyInvention = async (formData) => {
  const id = formData.get("id");
  await prisma.invention.delete({
    where: { id },
  });
  redirect("/admin");
  // revalidatePath("/admin");
};

export const getInvention = async (id) => {
  return prisma.invention.findUnique({
    where: { id },
  });
};

export const approveInvention = async (formData) => {
  const id = formData.get("id");
  const isApproved = formData.get("isApproved");
  await prisma.invention.update({
    where: { id },
    data: {
      isApproved: true,
    },
  });
  redirect("/admin");
};

export const findInvention = async (userId) => {
  if (userId) {
    const approvedInvention = await prisma.invention.findMany({
      where: { userId },
    });
    return approvedInvention;
  }
};

export const findSales = async (salesId) => {
  if (salesId) {
    const foundSales = await prisma.sales.findMany({
      where: { salesId },
    });
    return foundSales;
  }
};

export const createSales = async (formData) => {
  const january = formData.get("january");
  const february = formData.get("february");
  const march = formData.get("march");
  const april = formData.get("april");
  const may = formData.get("may");
  const june = formData.get("june");
  const july = formData.get("july");
  const august = formData.get("august");
  const september = formData.get("september");
  const october = formData.get("october");
  const november = formData.get("november");
  const december = formData.get("december");
  await prisma.sales.create({
    data: {
      salesId,
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
};
