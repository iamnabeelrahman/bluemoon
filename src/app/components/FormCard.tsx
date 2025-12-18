"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function FormCard() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                Designs for Every
            </h2>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Budget</h2>

            <div className="space-y-4">
                <Input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12"
                />
                <div className="flex items-center space-x-2 border rounded-md p-2 h-12">
                    <span className="text-xl">🇮🇳</span>
                    <input
                        type="tel"
                        placeholder="Phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="flex-1 outline-none text-gray-700"
                    />
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="whatsapp" defaultChecked />
                    <label
                        htmlFor="whatsapp"
                        className="text-sm text-gray-600 cursor-pointer"
                    >
                        Send me updates on WhatsApp
                    </label>
                </div>

                <Button className="bg-[#F45B5B] hover:bg-[#e24a4a] text-white w-full h-12 text-lg rounded-full">
                    NEXT
                </Button>

                <p className="text-xs text-center text-gray-500 mt-2">
                    By submitting this form, you agree to the{" "}
                    <span className="text-[#F45B5B] cursor-pointer">
                        privacy policy & terms and conditions
                    </span>
                </p>
            </div>
        </div>
    );
}
