import { MessageSquare } from "lucide-react";
import { getFeedbackHref, isExternalFeedbackLink } from "../../lib/site";
import { cn } from "../../lib/utils";

type FeedbackLinkProps = {
  className?: string;
  variant?: "button" | "inline";
};

export function FeedbackLink({ className, variant = "button" }: FeedbackLinkProps) {
  const href = getFeedbackHref();
  const external = isExternalFeedbackLink();

  if (variant === "inline") {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cn("inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-800", className)}
      >
        <MessageSquare className="h-4 w-4" />
        Share feedback
      </a>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50",
        className,
      )}
    >
      <MessageSquare className="h-4 w-4 text-brand-600" />
      Share feedback
    </a>
  );
}
