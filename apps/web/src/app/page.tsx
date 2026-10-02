"use client";

import {
  Activity,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  ChevronDown,
  CircleDollarSign,
  FlaskConical,
  ImageIcon,
  LayoutDashboard,
  Megaphone,
  MessageSquareText,
  MousePointerClick,
  Network,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  WandSparkles,
} from "lucide-react";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const performanceData = [
  { name: "Mon", impressions: 32000, conversions: 420 },
  { name: "Tue", impressions: 46000, conversions: 610 },
  { name: "Wed", impressions: 41000, conversions: 590 },
  { name: "Thu", impressions: 59000, conversions: 780 },
  { name: "Fri", impressions: 72000, conversions: 980 },
  { name: "Sat", impressions: 68000, conversions: 890 },
  { name: "Sun", impressions: 84000, conversions: 1180 },
];

const campaigns = [
  {
    name: "Fall Product Launch",
    channel: "Meta + Google",
    spend: "$8,420",
    roas: "4.8x",
    status: "Active",
  },
  {
    name: "Enterprise Lead Gen",
    channel: "LinkedIn",
    spend: "$6,140",
    roas: "3.7x",
    status: "Active",
  },
  {
    name: "Brand Awareness",
    channel: "YouTube",
    spend: "$4,830",
    roas: "2.9x",
    status: "Learning",
  },
];

const agents = [
  {
    name: "Strategist Agent",
    description: "Campaign strategy generated",
    status: "Completed",
  },
  {
    name: "Creative Agent",
    description: "Generated 8 new ad variants",
    status: "Completed",
  },
  {
    name: "Optimizer Agent",
    description: "Analyzing budget allocation",
    status: "Running",
  },
];

const navItems = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Campaigns", icon: Megaphone },
  { label: "Creative Studio", icon: ImageIcon },
  { label: "Audience Intelligence", icon: Users },
  { label: "AI Agents", icon: BrainCircuit },
  { label: "Analytics", icon: BarChart3 },
  { label: "Experiments", icon: FlaskConical },
  { label: "Brand Knowledge", icon: Network },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080b12] text-white">
      <div className="flex min-h-screen">
        <aside className="hidden w-[265px] flex-col border-r border-white/10 bg-[#0c1018] lg:flex">
          <div className="flex h-20 items-center border-b border-white/10 px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 shadow-lg shadow-violet-500/20">
                <Sparkles size={20} />
              </div>

              <div>
                <h1 className="text-lg font-semibold tracking-tight">
                  AdFusion AI
                </h1>
                <p className="text-xs text-slate-500">
                  Advertising Intelligence
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 py-5">
            <button className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-left">
              <div>
                <p className="text-xs text-slate-500">Workspace</p>
                <p className="text-sm font-medium">AdFusion Labs</p>
              </div>
              <ChevronDown size={16} className="text-slate-500" />
            </button>
          </div>

          <nav className="flex-1 px-3">
            <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
              Workspace
            </p>

            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.label}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                      item.active
                        ? "bg-violet-500/15 text-violet-200"
                        : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </button>
                );
              })}
            </div>

            <p className="mb-3 mt-8 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
              Management
            </p>

            <div className="space-y-1">
              <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 hover:bg-white/[0.04] hover:text-white">
                <BriefcaseBusiness size={18} />
                Integrations
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 hover:bg-white/[0.04] hover:text-white">
                <Settings size={18} />
                Settings
              </button>
            </div>
          </nav>

          <div className="border-t border-white/10 p-4">
            <div className="rounded-2xl bg-gradient-to-br from-violet-500/15 to-cyan-400/5 p-4">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/20">
                <WandSparkles size={18} className="text-violet-300" />
              </div>
              <p className="font-medium">AI Copilot</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Ask AdFusion about campaigns, performance and optimization.
              </p>
              <button className="mt-4 w-full rounded-lg bg-white px-3 py-2 text-xs font-semibold text-black">
                Open Copilot
              </button>
            </div>
          </div>
        </aside>

        <section className="flex min-w-0 flex-1 flex-col">
          <header className="flex h-20 items-center justify-between border-b border-white/10 bg-[#0a0e16]/90 px-6 backdrop-blur-xl lg:px-8">
            <div>
              <h2 className="text-xl font-semibold">Advertising Command Center</h2>
              <p className="mt-1 text-sm text-slate-500">
                Monitor, create and optimize campaigns using AI.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 md:block">
                Last 7 days
              </button>

              <button className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-slate-200">
                <Sparkles size={16} />
                Create Campaign
              </button>

              <div className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-semibold">
                PD
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-6 lg:p-8">
            <section className="mb-8 flex flex-col justify-between gap-5 xl:flex-row xl:items-end">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-xs text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  AI systems operational
                </div>

                <h3 className="max-w-3xl text-3xl font-semibold tracking-tight lg:text-4xl">
                  Your advertising intelligence,
                  <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                    {" "}
                    unified.
                  </span>
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                  AdFusion AI combines campaign strategy, creative intelligence,
                  audience insights and continuous optimization in one system.
                </p>
              </div>

              <button className="flex w-fit items-center gap-2 rounded-xl border border-violet-400/20 bg-violet-500/10 px-4 py-3 text-sm font-medium text-violet-200">
                <BrainCircuit size={17} />
                Ask AI about performance
              </button>
            </section>

            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <MetricCard
                icon={CircleDollarSign}
                label="Total Spend"
                value="$24,830"
                change="+12.4%"
              />

              <MetricCard
                icon={TrendingUp}
                label="ROAS"
                value="4.32x"
                change="+18.7%"
              />

              <MetricCard
                icon={MousePointerClick}
                label="CTR"
                value="5.84%"
                change="+9.1%"
              />

              <MetricCard
                icon={Target}
                label="Conversions"
                value="3,482"
                change="+21.5%"
              />
            </section>

            <section className="mt-6 grid gap-6 xl:grid-cols-[1.7fr_1fr]">
              <div className="rounded-2xl border border-white/10 bg-[#0d121c] p-5">
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold">Campaign Performance</h4>
                    <p className="mt-1 text-sm text-slate-500">
                      Impressions and conversion activity
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="h-2 w-2 rounded-full bg-violet-400" />
                    Impressions
                  </div>
                </div>

                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={performanceData}>
                      <defs>
                        <linearGradient
                          id="performance"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#8b5cf6"
                            stopOpacity={0.35}
                          />
                          <stop
                            offset="95%"
                            stopColor="#8b5cf6"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>

                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(255,255,255,0.05)"
                        vertical={false}
                      />

                      <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#64748b", fontSize: 12 }}
                      />

                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#64748b", fontSize: 12 }}
                      />

                      <Tooltip
                        contentStyle={{
                          background: "#111827",
                          border: "1px solid rgba(255,255,255,.1)",
                          borderRadius: "12px",
                        }}
                      />

                      <Area
                        type="monotone"
                        dataKey="impressions"
                        stroke="#8b5cf6"
                        strokeWidth={2}
                        fill="url(#performance)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0d121c] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">AI Recommendations</h4>
                    <p className="mt-1 text-sm text-slate-500">
                      Opportunities detected today
                    </p>
                  </div>

                  <Sparkles size={18} className="text-violet-400" />
                </div>

                <div className="space-y-3">
                  <InsightCard
                    title="Increase Meta budget"
                    description="Creative CTR is 38% above campaign average."
                    action="+$1,200 suggested"
                  />

                  <InsightCard
                    title="Refresh YouTube creative"
                    description="Frequency increased while engagement declined."
                    action="Generate variants"
                  />

                  <InsightCard
                    title="Expand enterprise audience"
                    description="High-intent lookalike segment identified."
                    action="+18% reach potential"
                  />
                </div>
              </div>
            </section>

            <section className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d121c]">
                <div className="flex items-center justify-between border-b border-white/10 p-5">
                  <div>
                    <h4 className="font-semibold">Active Campaigns</h4>
                    <p className="mt-1 text-sm text-slate-500">
                      Cross-channel campaign performance
                    </p>
                  </div>

                  <button className="text-sm text-violet-300">
                    View all campaigns
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="text-xs uppercase tracking-wider text-slate-600">
                      <tr>
                        <th className="px-5 py-4">Campaign</th>
                        <th className="px-5 py-4">Channel</th>
                        <th className="px-5 py-4">Spend</th>
                        <th className="px-5 py-4">ROAS</th>
                        <th className="px-5 py-4">Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      {campaigns.map((campaign) => (
                        <tr
                          key={campaign.name}
                          className="border-t border-white/[0.06]"
                        >
                          <td className="px-5 py-4 font-medium">
                            {campaign.name}
                          </td>
                          <td className="px-5 py-4 text-slate-400">
                            {campaign.channel}
                          </td>
                          <td className="px-5 py-4 text-slate-300">
                            {campaign.spend}
                          </td>
                          <td className="px-5 py-4 text-emerald-300">
                            {campaign.roas}
                          </td>
                          <td className="px-5 py-4">
                            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-2.5 py-1 text-xs text-emerald-300">
                              {campaign.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0d121c] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">Agent Activity</h4>
                    <p className="mt-1 text-sm text-slate-500">
                      Autonomous workflow status
                    </p>
                  </div>

                  <Activity size={18} className="text-cyan-300" />
                </div>

                <div className="space-y-5">
                  {agents.map((agent) => (
                    <div key={agent.name} className="flex gap-3">
                      <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.05]">
                        <BrainCircuit size={17} className="text-violet-300" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm font-medium">{agent.name}</p>

                          <span
                            className={`text-[11px] ${
                              agent.status === "Running"
                                ? "text-cyan-300"
                                : "text-emerald-300"
                            }`}
                          >
                            {agent.status}
                          </span>
                        </div>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {agent.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-6 rounded-2xl border border-violet-400/20 bg-gradient-to-r from-violet-500/10 via-[#101624] to-cyan-400/5 p-5">
              <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400">
                    <MessageSquareText size={21} />
                  </div>

                  <div>
                    <h4 className="font-semibold">AdFusion AI Copilot</h4>
                    <p className="mt-1 max-w-2xl text-sm text-slate-400">
                      Ask questions across campaigns, audiences and creative
                      performance using natural language.
                    </p>
                  </div>
                </div>

                <button className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black">
                  Start conversation
                </button>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
  change,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  change: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d121c] p-5">
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05]">
          <Icon size={18} className="text-violet-300" />
        </div>

        <span className="rounded-full bg-emerald-400/5 px-2 py-1 text-xs text-emerald-300">
          {change}
        </span>
      </div>

      <p className="mt-5 text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight">{value}</p>
    </div>
  );
}

function InsightCard({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/10">
          <Sparkles size={15} className="text-violet-300" />
        </div>

        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            {description}
          </p>
          <button className="mt-2 text-xs font-medium text-violet-300">
            {action}
          </button>
        </div>
      </div>
    </div>
  );
}