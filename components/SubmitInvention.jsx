// import prisma from "@/utils/db";
// import { auth } from "@clerk/nextjs";
// import InventionForm from "@/components/InventionForm";

// const prismaHandlers = async () => {
//   const { userId } = auth();
//   await prisma.invention.create({
//     data: {
//       userId: userId,
//       nameOfInventor: "a",
//       nameOfInvention: "b",
//       description: "c",
//       priceForApproval: 100,
//       imagePath: "/",
//       approvedDate: "2020-03-19T14:21:00+02:00",
//     },
//   });
// };

// const SubmitInvention = async ({ user }) => {
//   return (
//     <div>
//       <h2>Submit Your Invention For Review</h2>
//       <InventionForm />
//     </div>
//   );
// };
// export default SubmitInvention;
