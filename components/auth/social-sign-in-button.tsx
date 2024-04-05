"use client"

import { useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

import { Button } from "@/components/ui/button"

const DEFAULT_LOGIN_REDIRECT = "/guestbook"

export default function SocialSignInButton() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams?.get("callbackUrl")

  const handleClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    })
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => handleClick("google")}
      >
        <FcGoogle className="size-5" />
      </Button>

      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => handleClick("github")}
      >
        <FaGithub className="size-5" />
      </Button>
    </div>
  )
}