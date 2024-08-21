import MindMapPage from "@/components/mindmap/MindMapPage";
import { getSession } from "@auth0/nextjs-auth0";
export default async function MinMapById({ params }) {
  const session = await getSession();
  const sub = session.user.sub;
  console.log("sub", sub);
  const { id } = params;
  return (
    <div className="h-screen">
      <MindMapPage id={id} sub={sub} />
    </div>
  );
}
