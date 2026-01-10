"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Check,
  Shield,
  Users,
  Cog,
  BarChart3,
  Lock,
  FileCheck,
  Layers,
  Target,
  Zap,
  Search,
  Rocket,
} from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

function Building2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  )
}

export function MethodologyPageClient() {
  const principles = [
    {
      icon: Layers,
      title: "Structure Precedes Execution",
      description: "Labor cannot be optimized until it is structurally defined.",
    },
    {
      icon: Lock,
      title: "Accountability is Not Transferable",
      description: "Execution can move; ownership does not.",
    },
    {
      icon: Shield,
      title: "Constraints are First-Class Inputs",
      description: "Regulation, safety, audit, and risk define the feasible solution space.",
    },
    {
      icon: FileCheck,
      title: "Explainability is Mandatory",
      description: "Every allocation decision must be traceable and auditable.",
    },
  ]

  const phases = ["Initiate", "Acquire", "Configure", "Validate", "Process", "Observe", "Adjust", "Complete"]

  const outputs = [
    { icon: BarChart3, text: "End-to-end labor execution map" },
    { icon: Users, text: "Human + machine capacity plan" },
    { icon: Shield, text: "Compliance-safe augmentation roadmap" },
    { icon: FileCheck, text: "Audit-ready evidence trail" },
    { icon: Zap, text: "Cost savings and risk mitigation analysis" },
    { icon: Target, text: "Cross-functional impact analysis" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 animate-pulse opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            LABOR MAP<sup className="text-2xl">™</sup>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-4">Precision Labor Engineering for Regulated Operations</p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            A systematic framework for allocating work between humans and machines—without breaking compliance, control,
            or accountability.
          </p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            Built for Regulated Industries
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Where constrained labor supply meets high stakes and regulatory oversight
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-all hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-100 to-transparent rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Constrained Labor Supply</h3>
                <p className="text-gray-600">Not enough people to do all the work that needs to be done.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-all hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-100 to-transparent rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">High Cost of Failure</h3>
                <p className="text-gray-600">Mistakes create significant financial, legal, or safety consequences.</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-all hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-transparent rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Regulatory Oversight</h3>
                <p className="text-gray-600">Operations must satisfy external compliance requirements and audits.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      {/* Design Principles */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">Design Principles</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            The system is governed by invariants that ensure compliance, accountability, and explainability
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <Card
                key={index}
                className="border-2 hover:border-blue-200 transition-all hover:shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <principle.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{principle.title}</h3>
                      <p className="text-gray-600">{principle.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      {/* Four Layers - Hierarchical Structure */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">Hierarchical Structure</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Each layer constrains the layer below — ensuring compliance flows from top to bottom
          </p>

          {/* Desktop: 2x2 Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Layer 1: Organization */}
            <Card className="border-4 border-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
              <div className="absolute top-4 left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <CardContent className="p-8 pt-20">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Organization</h3>
                <p className="text-gray-700 font-semibold mb-3">What the company does</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Operating boundaries</li>
                  <li>• Scale classification</li>
                  <li>• Regulatory constraints</li>
                  <li>• Risk thresholds</li>
                </ul>
                <div className="mt-4 pt-4 border-t-2 border-blue-300">
                  <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">
                    Logic
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Layer 2: Strata */}
            <Card className="border-4 border-purple-600 bg-gradient-to-br from-purple-50 to-purple-100 relative overflow-hidden">
              <div className="absolute top-4 left-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <CardContent className="p-8 pt-20">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Strata</h3>
                <p className="text-gray-700 font-semibold mb-3">3D labor framework</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Vertical: Authority</li>
                  <li>• Horizontal: Function</li>
                  <li>• Scalar: Breadth/Depth</li>
                  <li>• Structural positions</li>
                </ul>
                <div className="mt-4 pt-4 border-t-2 border-purple-300">
                  <span className="inline-block px-3 py-1 bg-orange-600 text-white text-sm font-medium rounded-full">
                    Logic
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Layer 3: Role */}
            <Card className="border-4 border-indigo-600 bg-gradient-to-br from-indigo-50 to-indigo-100 relative overflow-hidden">
              <div className="absolute top-4 left-4 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <CardContent className="p-8 pt-20">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Role</h3>
                <p className="text-gray-700 font-semibold mb-3">Outcomes to deliver</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Outcome ownership</li>
                  <li>• Accountability boundaries</li>
                  <li>• Human requirements</li>
                  <li>• Non-transferable duties</li>
                </ul>
                <div className="mt-4 pt-4 border-t-2 border-indigo-300">
                  <span className="inline-block px-3 py-1 bg-yellow-600 text-white text-sm font-medium rounded-full">
                    STAYS HUMAN
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Layer 4: Task */}
            <Card className="border-4 border-green-600 bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden">
              <div className="absolute top-4 left-4 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <CardContent className="p-8 pt-20">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Task</h3>
                <p className="text-gray-700 font-semibold mb-3">How work gets done</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Execution units</li>
                  <li>• 8-phase decomposition</li>
                  <li>• Human/Jo allocation</li>
                  <li>• Hybrid workflows</li>
                </ul>
                <div className="mt-4 pt-4 border-t-2 border-green-300">
                  <span className="inline-block px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                    Jo can help HERE
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-4">
            <Card className="border-4 border-blue-600 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Organization</h3>
                    <p className="text-sm text-gray-700">What the company does</p>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full mb-2">
                  Logic
                </span>
                <p className="text-sm text-gray-600">Operating boundaries, scale, constraints</p>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
            </div>

            <Card className="border-4 border-purple-600 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Strata</h3>
                    <p className="text-sm text-gray-700">3D labor framework</p>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 bg-orange-600 text-white text-sm font-medium rounded-full mb-2">
                  Logic
                </span>
                <p className="text-sm text-gray-600">Authority, function, breadth/depth</p>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
            </div>

            <Card className="border-4 border-indigo-600 bg-gradient-to-br from-indigo-50 to-indigo-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Role</h3>
                    <p className="text-sm text-gray-700">Outcomes to deliver</p>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 bg-yellow-600 text-white text-sm font-medium rounded-full mb-2">
                  STAYS HUMAN
                </span>
                <p className="text-sm text-gray-600">Accountability and ownership</p>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
            </div>

            <Card className="border-4 border-green-600 bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Task</h3>
                    <p className="text-sm text-gray-700">How work gets done</p>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full mb-2">
                  Jo can help HERE
                </span>
                <p className="text-sm text-gray-600">Execution and allocation</p>
              </CardContent>
            </Card>
          </div>

          {/* Key Insight */}
          <Card className="mt-8 border-2 border-blue-600 bg-gradient-to-r from-blue-600 to-purple-600">
            <CardContent className="p-6 text-center text-white">
              <p className="text-xl font-bold mb-2">The Key to Compliance</p>
              <p className="text-lg">
                Constraints flow downward. Accountability stays at Role. Execution flexibility exists only at Task.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      {/* Our Framework Section - BEFORE 8-Phase */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">Our Framework</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Fast Insight, Practical Plans, Real Operational Change
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Discovery */}
            <Card className="border-2 hover:border-blue-200 transition-all hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full"></div>
              <CardContent className="p-8 relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Search className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">Step 1</span>
                    <h3 className="text-xl font-bold text-gray-900">Discovery</h3>
                  </div>
                </div>
                <p className="text-blue-700 font-semibold mb-3">Discover the problem</p>
                <p className="text-gray-600 leading-relaxed">
                  We map your organization's structure, identify who owns each outcome, and pinpoint where work is
                  breaking down or creating bottlenecks.
                </p>
              </CardContent>
            </Card>

            {/* Design */}
            <Card className="border-2 hover:border-purple-200 transition-all hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-transparent rounded-bl-full"></div>
              <CardContent className="p-8 relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Layers className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-purple-600 uppercase tracking-wide">Step 2</span>
                    <h3 className="text-xl font-bold text-gray-900">Design</h3>
                  </div>
                </div>
                <p className="text-purple-700 font-semibold mb-3">Design the fix</p>
                <p className="text-gray-600 leading-relaxed">
                  We figure out which tasks humans must do and which machines can handle, creating a detailed plan that
                  shows cost savings, reduces risk, and maintains compliance.
                </p>
              </CardContent>
            </Card>

            {/* Deploy */}
            <Card className="border-2 hover:border-green-200 transition-all hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-100 to-transparent rounded-bl-full"></div>
              <CardContent className="p-8 relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-green-600 uppercase tracking-wide">Step 3</span>
                    <h3 className="text-xl font-bold text-gray-900">Deploy</h3>
                  </div>
                </div>
                <p className="text-green-700 font-semibold mb-3">Deploy the solution</p>
                <p className="text-gray-600 leading-relaxed">
                  We put the solution into action with clear controls, live monitoring, and audit trails that prove
                  everything is working correctly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      {/* 8-Phase Decomposition */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            8-Phase Outcome Decomposition
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Every outcome follows a universal execution pattern that enables precise task allocation
          </p>

          <Card className="border-2 p-8 mb-8">
            <CardContent className="p-0">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {phases.map((phase, index) => (
                  <div key={index} className="relative">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-600 rounded-lg p-4 text-center">
                      <div className="text-sm font-bold text-blue-600 mb-1">{index + 1}</div>
                      <div className="text-base font-semibold text-gray-900">{phase}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-green-200 transition-all hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  H
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Human</h4>
                <p className="text-gray-600">Requires judgment, dexterity, or regulatory mandate</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-all hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  M
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Machine</h4>
                <p className="text-gray-600">Deterministic, high-volume, verifiable</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-all hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm">
                  H+M
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Hybrid</h4>
                <p className="text-gray-600">Shared execution with defined handoff points</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      {/* Autonomy-Risk Problem */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">The Autonomy-Risk Problem</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Why traditional approaches to intelligent systems fail in regulated environments
          </p>

          {/* The Paradox */}
          <Card className="border-2 border-red-200 bg-red-50 mb-8">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Paradox</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="bg-white rounded-lg p-6 border-2 border-red-200">
                    <h4 className="font-bold text-red-600 mb-2">More Autonomy = More Risk</h4>
                    <p className="text-gray-700">Give Jo freedom to adapt and it can make unpredictable mistakes</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border-2 border-red-200">
                    <h4 className="font-bold text-red-600 mb-2">More Control = Less Flexibility</h4>
                    <p className="text-gray-700">
                      Lock down every decision and you lose the benefits of intelligent automation
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-lg text-gray-700 font-semibold">
                  In regulated industries: Mistakes = Fines, Safety Issues, Lawsuits
                </p>
              </div>
            </CardContent>
          </Card>

          {/* The Governance Dilemma */}
          <Card className="border-2 mb-8">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">The Governance Dilemma</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <Cog className="w-8 h-8 mx-auto mb-3 text-gray-600" />
                  <h4 className="font-bold text-gray-900 mb-2">Tools</h4>
                  <p className="text-sm text-gray-600">Predictable, you own them, no autonomy</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <Users className="w-8 h-8 mx-auto mb-3 text-gray-600" />
                  <h4 className="font-bold text-gray-900 mb-2">Employees</h4>
                  <p className="text-sm text-gray-600">Autonomous, you supervise them, accountable</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 text-center border-2 border-blue-600">
                  <Zap className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                  <h4 className="font-bold text-gray-900 mb-2">Jo (Machine Staff)</h4>
                  <p className="text-sm text-gray-700 font-semibold">Somewhere in between — THIS is the problem</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Labor Map's Solution */}
          <Card className="border-2 border-blue-600 bg-gradient-to-br from-blue-50 to-purple-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How Labor Map Solves This</h3>

              <div className="bg-white rounded-lg p-6 mb-6 border-2">
                <h4 className="font-bold text-gray-900 mb-4 text-center">Labor Map's Safety Architecture</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border-2 border-red-200">
                    <div>
                      <span className="font-bold text-red-600">Layer 1: Organization</span>
                      <span className="text-gray-600 ml-4">Hard constraints</span>
                    </div>
                    <span className="px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">Logic</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
                    <div>
                      <span className="font-bold text-orange-600">Layer 2: Strata</span>
                      <span className="text-gray-600 ml-4">Structure</span>
                    </div>
                    <span className="px-3 py-1 bg-orange-600 text-white text-sm font-medium rounded-full">Logic</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border-2 border-yellow-300">
                    <div>
                      <span className="font-bold text-yellow-700">Layer 3: Role</span>
                      <span className="text-gray-600 ml-4">Accountability</span>
                    </div>
                    <span className="px-3 py-1 bg-yellow-600 text-white text-sm font-medium rounded-full">
                      STAYS HUMAN
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border-2 border-green-300">
                    <div>
                      <span className="font-bold text-green-700">Layer 4: Task</span>
                      <span className="text-gray-600 ml-4">Execution</span>
                    </div>
                    <span className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                      Jo can help HERE
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 text-white rounded-lg p-6 text-center">
                <p className="text-xl font-bold mb-2">The Key Principle</p>
                <p className="text-2xl">"Execution can move; ownership does not."</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      {/* Graduated Autonomy Framework */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            Graduated Autonomy Framework
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Match Jo's autonomy to risk level — calibrated freedom, not blanket access
          </p>

          <div className="space-y-4">
            <Card className="border-2 border-red-600">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">
                        Critical Risk
                      </span>
                      <span className="text-2xl font-bold text-gray-900">Strict Logic</span>
                    </div>
                    <p className="text-gray-700 mb-2">Regulatory compliance, safety, legal liability</p>
                    <p className="text-sm text-gray-600">
                      <strong>Jo role:</strong> Observer only — LOG and ALERT humans
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lock className="w-8 h-8 text-red-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
                        High Risk
                      </span>
                      <span className="text-2xl font-bold text-gray-900">10-20% Autonomous</span>
                    </div>
                    <p className="text-gray-700 mb-2">Quality control, approvals, financial decisions</p>
                    <p className="text-sm text-gray-600">
                      <strong>Jo role:</strong> Recommend — human reviews and approves
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-8 h-8 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-500">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-yellow-600 text-white text-sm font-medium rounded-full">
                        Medium Risk
                      </span>
                      <span className="text-2xl font-bold text-gray-900">50-70% Autonomous</span>
                    </div>
                    <p className="text-gray-700 mb-2">Data processing, reporting, routine operations</p>
                    <p className="text-sm text-gray-600">
                      <strong>Jo role:</strong> Execute — human spot-checks and monitors
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-8 h-8 text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-600">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                        Low Risk
                      </span>
                      <span className="text-2xl font-bold text-gray-900">90% Autonomous</span>
                    </div>
                    <p className="text-gray-700 mb-2">Scheduling, notifications, data logging</p>
                    <p className="text-sm text-gray-600">
                      <strong>Jo role:</strong> Handle it — human reviews logs periodically
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Real Example */}
          <Card className="mt-12 border-2 border-blue-600 bg-gradient-to-br from-blue-50 to-purple-50">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Real Example: Food Processing Plant</h3>
              <p className="text-center text-gray-700 mb-6">
                Mission: "Ensure product safety and quality for Batch #1247"
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border-2 border-red-200">
                  <h4 className="font-bold text-red-600 mb-3">Zero Autonomy</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Final batch approval → Human (FDA)</li>
                    <li>• Allergen declaration → Human (liability)</li>
                    <li>• Safety override → Human (OSHA)</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-orange-200">
                  <h4 className="font-bold text-orange-600 mb-3">Low Autonomy</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Quality analysis → Jo analyzes, human approves</li>
                    <li>• Deviation investigation → Jo gathers, human decides</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-yellow-300">
                  <h4 className="font-bold text-yellow-700 mb-3">Medium Autonomy</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Temperature monitoring → Jo adjusts within range</li>
                    <li>• Inventory reordering → Jo orders if below threshold</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-green-300">
                  <h4 className="font-bold text-green-700 mb-3">High Autonomy</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Data logging → Jo handles completely</li>
                    <li>• Report generation → Jo creates, human reviews periodically</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
        </div>
      </div>

      {/* System Outputs / Deliverables */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">What You Get</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Labor Map produces a complete blueprint for human-machine collaboration
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outputs.map((output, index) => (
              <Card
                key={index}
                className="border-2 hover:border-blue-200 transition-all hover:shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <output.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-base font-medium text-gray-900">{output.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Engineer Your Labor System?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join regulated companies using Labor Map to scale operations without breaking compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button className="bg-red-500 hover:bg-red-600 text-white h-12 px-8 text-base font-semibold">
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 h-12 px-8 text-base font-semibold bg-transparent"
            >
              Download Whitepaper
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
