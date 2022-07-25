import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Search from "./searchmodal"

export default function Layout(props) {
  const [search, setshowSearch] = useState(false);

  return (
    <>
    {
        <Search setshowSearch={setshowSearch} search={search}/>
    }
      <div className="flex flex-col min-h-screen">
        {!props.noHeader && <Header setSearch={setshowSearch}  banner={props.banner} />}
        <main className="flex-1">{props.children}</main>
        {!props.noFooter && <Footer />}
      </div>
    </>
  );
}
