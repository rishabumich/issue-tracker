"use client";

import { TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl pl-5">
      <TextField.Root>
        <TextField.Input placeholder="Search Issues" />
      </TextField.Root>
    </div>
  );
};

export default NewIssuePage;
