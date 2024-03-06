'use client'
import { Button } from "@/shared/ui/UI";
import styles from "./page.module.scss";
import { useState } from "react";
import Hero from "@/features/Hero/Hero";
import OurServices from "@/features/ourServices/OurServices";
import Advantages from "@/features/Advantages/Advantages";
import Consultation from "@/features/consultation/Consultation";
import { useUnit } from "effector-react";
import { $usersStor } from "@/stors/usersStor";

export default function Home() {

  return (
    <main className={styles.main}>
			<Hero/>
			<OurServices/>
			<Advantages/>
			<Consultation/>
    </main>
  );
}
