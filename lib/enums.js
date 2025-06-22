import Link from "next/link";

export const AGREEMENTS = [
  {
    value: "privacy-policy",
    label: (
      <p className="text-sm">
        I agree to Lazuardy&apos;s{" "}
        <Link
          href="/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          Privacy Policy
        </Link>
      </p>
    ),
  },
  {
    value: "terms-of-service",
    label: (
      <p className="text-sm">
        I agree to Lazuardy&apos;s{" "}
        <Link
          href="/legal/terms-of-service"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          Terms of Service
        </Link>
      </p>
    ),
  },
];
