"use client";
import { usePathname } from "next/navigation";
export default function Post() {
const pathname = usePathname();
return <p> {pathname}</p>; /* usepathname - returns the path of the page as the name says.For example, if i navigating
to "post/[3] or/[4]"...
the pathname - will return "post/[3] or [/4]" and the number at the end will change depending upon the pages that will be accessed.
 */
}