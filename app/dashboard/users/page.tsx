import Link from "next/link";

const page = () => {
  return (
    <div>
      Users Page
      <ul className="user-list mt-10">
        <li>
          <Link href="/dashboard/users/1">User 1</Link>
        </li>
        <li>
          <Link href="/dashboard/users/2">User 2</Link>
        </li>
        <li>
          <Link href="/dashboard/users/3">User 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
