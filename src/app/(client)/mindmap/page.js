import AddMindMap from "@/components/mindmap/button/AddMindMap";
import ListMindMap from "@/components/mindmap/ListMindMap";
import { getSession } from "@auth0/nextjs-auth0";
export default async function MindMapHome() {
  // const
  const session = await getSession();
  const sub = session.user.sub;
  // console.log("mindmap home");
  // console.log("session", session);
  // console.log("sub", sub);
  return (
    <div className="h-fit w-full px-4 py-8">
      <h1 className="text-3xl font-bold">Mind Map của tôi</h1>
      <AddMindMap sub={sub} />
      <ListMindMap sub={sub} />
    </div>
  );
}
