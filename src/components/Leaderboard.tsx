import { motion } from 'motion/react';
import { ShieldCheck, ShieldAlert, CheckCircle2, ChevronRight, TrendingUp } from 'lucide-react';

const PROJECTS = [
  { name: 'Ethereum Foundation', score: 98, status: 'Audited', category: 'L1', marketCap: '$320B' },
  { name: 'Uniswap v4', score: 95, status: 'Audited', category: 'DEX', marketCap: '$4.2B' },
  { name: 'Aave', score: 94, status: 'In-Progress', category: 'Lending', marketCap: '$1.8B' },
  { name: 'Polygon', score: 92, status: 'Audited', category: 'L2', marketCap: '$6.5B' },
  { name: 'Chainlink', score: 88, status: 'Audited', category: 'Oracle', marketCap: '$8.2B' },
];

export default function Leaderboard() {
  return (
    <section className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Security Leaderboard</h2>
            <p className="text-white/60">Real-time security insights for the world's most trusted protocols.</p>
          </div>
          <button className="flex items-center gap-2 text-brand-accent font-medium hover:underline">
            View All Projects
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10 glass">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-xs uppercase tracking-wider text-white/40 font-bold">
              <tr>
                <th className="px-6 py-4"># Rank</th>
                <th className="px-6 py-4">Project</th>
                <th className="px-6 py-4">Security Score</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Market Cap</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {PROJECTS.map((project, idx) => (
                <motion.tr 
                  key={project.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="hover:bg-white/5 cursor-pointer transition-colors"
                >
                  <td className="px-6 py-6 font-mono text-sm text-white/60">{idx + 1}</td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent font-bold text-xs">
                        {project.name[0]}
                      </div>
                      <div>
                        <div className="font-bold">{project.name}</div>
                        <div className="text-xs text-white/40">{project.category}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-2">
                       <ScoreCircle score={project.score} />
                       <span className="font-bold text-lg">{project.score}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-[10px] uppercase font-bold ${
                      project.status === 'Audited' ? 'bg-brand-accent/10 text-brand-accent border border-brand-accent/20' : 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20'
                    }`}>
                      {project.status === 'Audited' ? <CheckCircle2 className="w-3 h-3" /> : <TrendingUp className="w-3 h-3" />}
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-6 font-mono text-sm">{project.marketCap}</td>
                  <td className="px-6 py-6">
                    <button className="text-xs font-bold text-white/60 hover:text-white uppercase tracking-wider">Reports</button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ScoreCircle({ score }: { score: number }) {
  const color = score > 90 ? 'text-brand-accent' : score > 80 ? 'text-brand-blue' : 'text-yellow-500';
  return (
    <div className={`w-3 h-3 rounded-full ${color} bg-current opacity-80 glow-cyan`} />
  );
}
