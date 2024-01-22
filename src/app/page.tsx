"use client";

import { Logo, PageData } from "@/types/page";
import { Protocol } from "@/types/protocol";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import DEFILogo from "@/assets/logo.svg";

export default function Home() {
  const data = pageData();
  const [logos, setLogos] = useState<Logo[]>([]);
  const [count, setCount] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");

  data.then((data) => {
    setLogos(data.logos);
    setCount(data.count);
  });

  const filteredLogos = logos.filter((logo) =>
    logo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className={styles.main}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          src={DEFILogo}
          width="100"
          height="100"
          alt="DEFI Sites"
          style={{
            aspectRatio: "1/1",
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      {filteredLogos.map(({ logo, name, url }) => {
        return (
          <Link
            href={url}
            target="_blank"
            title={name}
            key={name}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src={logo}
              alt={name}
              width="100"
              height="100"
              style={{
                aspectRatio: "1/1",
                width: "100%",
                height: "auto",
              }}
            />
          </Link>
        );
      })}
    </main>
  );
}

const getProtocols = async (): Promise<Protocol[]> => {
  const response = await fetch("https://api.llama.fi/protocols");
  const protocols = (await response.json()) as Protocol[];
  return protocols;
};

const pageData = async (): Promise<PageData> => {
  const protocols = await getProtocols();
  const logos = protocols.map((protocol) => {
    return {
      name: protocol.name,
      logo: protocol.logo,
      url: protocol.url,
    };
  });

  return {
    logos,
    count: protocols.length,
  };
};
