import React from 'react';
import { spacing, typography, components } from '../config/design-system';

type MetricCard = {
  label: string;
  value: string;
  trend?: string;
};

type MockDashboardProps = (
  | { showMetrics?: true; metrics: MetricCard[] }
  | { showMetrics: false; metrics?: never }
) & {
  user: string;
  sidebar: string[];
  pageTitle: string;
  table: {
    title: string;
    columns: string[];
    rows: string[][];
  };
};

export function MockDashboard(props: MockDashboardProps) {
  const { user, sidebar, pageTitle, table } = props;

  return (
    <div className={`${components.radius.button} border border-border-subtle bg-bg-default overflow-hidden`}>

      {/* Top bar */}
      <div className="flex items-center px-4 py-3 border-b border-border-subtle bg-bg-default">
        <span className={`${typography.label} text-text-primary`}>Logo</span>
      </div>

      {/* Body */}
      <div className="flex flex-col lg:flex-row">

        {/* Main content */}
        <div className={`flex-1 order-1 ${spacing.card.padding.md}`}>

          {/* Page title */}
          <div className={spacing.block.y.sm}>
            <h3 className={`${typography.label} text-text-primary`}>{pageTitle}</h3>
          </div>

          {/* Metric cards */}
          {props.showMetrics !== false && (
            <div className={`grid grid-cols-2 lg:grid-cols-4 ${spacing.gap.md} ${spacing.block.y.sm}`}>
              {props.metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`${components.card.base} border-border-subtle bg-bg-default px-4 py-3`}
                >
                  <div className={`${typography.textXs} text-text-muted ${spacing.element.y.xs}`}>
                    {metric.label}
                  </div>
                  <div className={`${typography.label} text-text-primary font-mono text-right`}>
                    {metric.value}
                    {metric.trend && (
                      <span
                        className={`ml-1 ${typography.textXs} ${
                          metric.trend.startsWith('+')
                            ? 'text-emerald-600'
                            : 'text-red-500'
                        }`}
                      >
                        {metric.trend}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Table */}
          <div className="overflow-x-auto">
            <div className={`${typography.label} text-text-primary ${spacing.element.y.xs}`}>
              {table.title}
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border-subtle">
                  {table.columns.map((col, i) => (
                    <th
                      key={i}
                      className={`text-left ${typography.textXs} text-text-muted py-2 px-1 font-medium`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-b border-border-subtle">
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`${typography.textXs} text-text-secondary py-2 px-1 ${/^\d/.test(cell) ? 'font-mono text-right' : 'text-left whitespace-nowrap'}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        {/* Sidebar (desktop) / Bottom bar (mobile) */}
        <div className="order-2 lg:order-first flex flex-row lg:flex-col lg:w-40 lg:shrink-0 border-t lg:border-t-0 lg:border-r border-border-subtle lg:py-4 py-2">
          {sidebar.map((item, index) => (
            <div
              key={index}
              className={`flex-1 lg:flex-none text-center lg:text-left px-3 py-2 ${typography.textXs} ${
                index === 0
                  ? `bg-bg-neutral ${components.radius.button} text-text-primary font-medium`
                  : 'text-text-muted'
              } lg:mx-2`}
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
