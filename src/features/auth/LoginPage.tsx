import { Link } from "react-router-dom";

export function LoginPage() {
  return (
    <div className="grid min-h-screen bg-[#faf9f6] lg:grid-cols-2">
      <div className="hidden border-r border-slate-200 bg-white p-10 lg:flex lg:flex-col lg:justify-between">
        <Link to="/" className="text-lg font-semibold text-slate-950">Premed OS</Link>
        <div>
          <p className="text-3xl font-semibold tracking-tight text-slate-950">A calmer way to prepare for a high-stakes application.</p>
          <p className="mt-4 text-sm leading-6 text-slate-600">Use one place to keep track of the experiences, reflections, drafts, and decisions that become your application.</p>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-950">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-600">Continue organizing your application story.</p>
          <form className="mt-6 space-y-4">
            <label className="grid gap-1.5 text-sm font-medium text-slate-700">
              Email
              <input defaultValue="maya@example.com" className="rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-slate-700">
              Password
              <input type="password" defaultValue="premedos" className="rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
            </label>
            <Link to="/dashboard" className="block rounded-md bg-brand-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-brand-700">
              Continue
            </Link>
          </form>
          <p className="mt-5 text-center text-sm text-slate-500">New here? <Link to="/dashboard" className="font-semibold text-brand-700">Start your readiness check</Link></p>
        </div>
      </div>
    </div>
  );
}
