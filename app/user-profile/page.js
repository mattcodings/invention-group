// import { UserButton, UserProfile, currentUser } from "@clerk/nextjs";
// import Image from "next/image";
// const imageLoader = ({ src, width, quality }) => {
//   return `${user.imageUrl}/`;
// };

// const UserProfilePage = async () => {
//   const user = await currentUser();
//   const date = new Date(user.createdAt);

//   const dateCreated = date.toISOString();
//   console.log(user);
//   return (
//     <div>
//       <UserButton afterSignOutUrl="/" />
//       <span>{user.firstName} </span>
//       <span>{user.lastName}</span>
//       <p>{dateCreated}</p>
//       <p>{user.emailAddresses[0].emailAddress}</p>
//     </div>
//   );
// };
// export default UserProfilePage;
