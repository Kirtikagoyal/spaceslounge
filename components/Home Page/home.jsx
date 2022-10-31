import Button from "../Button/button";
import Triangle from "../Triangle/triangle";

import { motion as m } from "framer-motion";

const home = () => {
  return (
    <m.header exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <Triangle />
      <div className="container">
        <m.h1
          animate={{ y: [100, -10, 0], scale: [1, 1.2, 1], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          // exit={{ opacity: 0, x: 100 }}
        >
          spaces lounge
        </m.h1>
        <m.p
          animate={{ y: [100, -10, 0], scale: [1, 1.2, 1], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius dicta
          dolor saepe alias quos, totam laboriosam ut itaque ullam voluptatum
          adipisci! Voluptatum similique sunt, earum autem consectetur aperiam
          mollitia quas.
        </m.p>
        <Button path="/sign-up" />
      </div>
    </m.header>
  );
};

export default home;
