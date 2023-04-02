import React from "react";
import { LibraryReadme } from "../../../components/LibraryReadme";
import { useRouter } from "next/router";
import { packages } from "../../../data/packages";

export default function SocialMatrixReadme() {
  const router = useRouter();
  const packageName = router.query.packageName as string;

  // @ts-ignore
  if (!packageName || !packages[packageName]) {
    // TODO: back to main
    return null;
  }

  return <LibraryReadme libraryName={packageName as any} />;
}
