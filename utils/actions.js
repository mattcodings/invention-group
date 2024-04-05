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
};

export const findInvention = async (userId) => {
  if (userId) {
    const approvedInvention = await prisma.invention.findMany({
      where: { userId },
    });
    return approvedInvention;
  }
};

// export const findSales = async (salesId) => {
//   if (salesId) {
//     const foundSales = await prisma.sales.findUnique({
//       where: { salesId },
//     });
//     return foundSales;
//   }
// };

// export const createSales = async (formData) => {
//   const salesId = formData.get("salesId");
//   await prisma.sales.create({
//     data: {
//       salesId,
//       january: 0,
//       february: 0,
//       march: 0,
//       april: 0,
//       may: 0,
//       june: 0,
//       july: 0,
//       august: 0,
//       september: 0,
//       october: 0,
//       november: 0,
//       december: 0,
//     },
//   });
// };

export const updateSales = async (formData) => {
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
};
