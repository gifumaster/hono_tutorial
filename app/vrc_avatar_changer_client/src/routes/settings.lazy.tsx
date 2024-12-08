import { Button } from "@/components/ui/button";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/settings")({
	component: Index,
});

function Index() {
	return <div className="card bg-red-100">Settings</div>;
}
