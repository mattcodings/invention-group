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
