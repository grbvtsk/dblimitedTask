import {currentUser} from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser()
  const userName =  user?.username

  const welcomeSuffix = userName ? `, ${userName}`: ''

  return (
    <div className="justify-items-center sm:p-20 ">
      <h1>Welcome {welcomeSuffix}✋🏽</h1>
    </div>
  );
}
