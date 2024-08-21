import { getSession } from "@auth0/nextjs-auth0/edge";
import { NextResponse } from "next/server";
export const middleware = async (req) => {
  const path = req.nextUrl.pathname;
  //   console.log(path);
  const idMap = path.split("/")[2];
  //   console.log(idMap);
  const session = await getSession(req);
  const user = session?.user;
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users`);
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();
    // console.log("data", data);
    let mindMap;
    let ownerId;
    let status;
    data.forEach((user) => {
      const foundMap = user.mindMapData?.find((map) => map.idMap === idMap);
      if (foundMap) {
        mindMap = foundMap;
        ownerId = user.id;
        status = mindMap.status;
      }
    });
    if (status === "private") {
      if (!user) {
        return NextResponse.redirect(new URL("/api/auth/login", req.url));
      }
      if (user.sub !== ownerId) {
        return NextResponse.redirect(new URL("/notfound", req.url));
      }
    } else if (path.includes("/mindmap")) {
      if (!user) {
        return NextResponse.redirect(new URL("/api/auth/login", req.url));
      }
    }
    return NextResponse.next();
  } catch (error) {
    console.error("Error in middleware:", error);
    return NextResponse.redirect(new URL("/error", req.url));
  }
};

export const config = {
  matcher: ["/mindmap/:path*"],
};
