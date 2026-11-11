import { useState } from 'react';
import { VISUAL_PRESETS, VisualPreset } from './DigitalMonolith';
import { RotateCw, ChevronDown, ChevronUp, Sliders, Sparkles, Activity } from 'lucide-react';

interface DigitalControlDockProps {
  preset: VisualPreset;
  setPreset: (preset: VisualPreset) => void;
  streamEnabled: boolean;
  setStreamEnabled: (val: boolean | ((prev: boolean) => boolean)) => void;
  autoRotate: boolean;
  setAutoRotate: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export function DigitalControlDock({
  preset,
  setPreset,
  streamEnabled,
  setStreamEnabled,
  autoRotate,
  setAutoRotate,
}: DigitalControlDockProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 w-full max-w-[94vw] sm:max-w-2xl px-2 transition-transform duration-300 pointer-events-auto">
      {/* Collapse/Expand Toggle Tab */}
      <div className="flex justify-center mb-1">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono tracking-wider text-[#94A3B8] hover:text-[#00E5FF] glass-panel-subtle rounded-t-xl hover:border-[#00E5FF]/40 transition-colors cursor-pointer"
          aria-label={collapsed ? "Expand 3D Controls" : "Collapse 3D Controls"}
        >
          <Sliders size={12} className="text-[#00E5FF]" />
          <span>{collapsed ? '3D ENVIRONMENT CONTROLS ▴' : 'COLLAPSE 3D HUD ▾'}</span>
          {collapsed ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
        </button>
      </div>

      {/* Main Controls Dock with Glassmorphism */}
      {!collapsed && (
        <div className="glass-panel rounded-2xl p-3 shadow-2xl flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Preset Selector */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] flex items-center gap-1">
              <Sparkles size={12} className="text-[#00E5FF]" />
              <span>PRESET:</span>
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {VISUAL_PRESETS.map((item) => {
                const active = preset.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setPreset(item)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-mono whitespace-nowrap transition-all cursor-pointer border ${
                      active
                        ? 'bg-[#00E5FF]/20 border-[#00E5FF]/60 text-white shadow-[0_0_12px_rgba(0,229,255,0.25)]'
                        : 'glass-panel-subtle text-[#94A3B8] hover:text-white hover:border-white/20'
                    }`}
                  >
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Toggles */}
          <div className="flex items-center gap-2 border-l border-white/10 pl-3">
            {/* Kinetic Stream Toggle */}
            <button
              onClick={() => setStreamEnabled((prev) => !prev)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors cursor-pointer border ${
                streamEnabled
                  ? 'bg-[#00E5FF]/20 border-[#00E5FF]/50 text-[#00E5FF]'
                  : 'glass-panel-subtle text-[#94A3B8] hover:text-white'
              }`}
              title="Toggle Kinetic Particle Stream"
            >
              <Activity size={12} className={streamEnabled ? 'text-[#00E5FF]' : ''} />
              <span>Flow: {streamEnabled ? 'ON' : 'OFF'}</span>
            </button>

            {/* Orbit Auto-Rotation Toggle */}
            <button
              onClick={() => setAutoRotate((prev) => !prev)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors cursor-pointer border ${
                autoRotate
                  ? 'bg-[#7C4DFF]/20 border-[#7C4DFF]/50 text-[#C4B5FD]'
                  : 'glass-panel-subtle text-[#94A3B8] hover:text-white'
              }`}
              title="Toggle Autonomous Orbit"
            >
              <RotateCw size={12} className={autoRotate ? 'text-[#7C4DFF]' : ''} />
              <span>Orbit: {autoRotate ? 'ON' : 'OFF'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
