"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Upload,
  FileText,
  User,
  DollarSign,
  Building,
} from "lucide-react";

const steps = [
  { id: 1, title: "Product", icon: Building },
  { id: 2, title: "Personal", icon: User },
  { id: 3, title: "Estate", icon: FileText },
  { id: 4, title: "Amount", icon: DollarSign },
  { id: 5, title: "Documents", icon: Upload },
  { id: 6, title: "Review", icon: Check },
];

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    productType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    estateName: "",
    estateValue: "",
    relationship: "",
    probateStatus: "",
    requestedAmount: "",
    purpose: "",
  });

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 6));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-[#f8fafc] py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#0f172a] transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-2xl font-semibold text-[#0f172a]">
            New Application
          </h1>
          <p className="text-[#64748b] mt-1">
            Complete the steps below to submit your inheritance advance request.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8 bg-white border border-[#e2e8f0] rounded p-4">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                      currentStep > step.id
                        ? "bg-[#059669] text-white"
                        : currentStep === step.id
                        ? "bg-[#0f2744] text-white"
                        : "bg-[#f1f5f9] text-[#64748b]"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      step.id
                    )}
                  </div>
                  <span
                    className={`text-xs mt-2 hidden sm:block ${
                      currentStep >= step.id ? "text-[#0f172a]" : "text-[#94a3b8]"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-8 md:w-12 lg:w-16 h-0.5 mx-2 ${
                      currentStep > step.id ? "bg-[#059669]" : "bg-[#e2e8f0]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <Card variant="elevated">
          <CardContent className="p-8">
            {/* Step 1: Product Type */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-[#0f172a] mb-2">
                    Select Product Type
                  </h2>
                  <p className="text-[#64748b]">
                    Choose the type of inheritance advance that fits your situation.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => updateFormData("productType", "advance")}
                    className={`p-6 rounded border-2 text-left transition-colors ${
                      formData.productType === "advance"
                        ? "border-[#0f2744] bg-[#f8fafc]"
                        : "border-[#e2e8f0] hover:border-[#cbd5e1]"
                    }`}
                  >
                    <Badge variant="navy" className="mb-3">Post-Probate</Badge>
                    <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Advance</h3>
                    <p className="text-sm text-[#64748b] mb-4">
                      For estates currently in probate. Get funding while your inheritance is being processed.
                    </p>
                    <ul className="space-y-2 text-sm text-[#475569]">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#059669]" />
                        Funding in 48 hours
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#059669]" />
                        No credit check
                      </li>
                    </ul>
                  </button>

                  <button
                    onClick={() => updateFormData("productType", "secure")}
                    className={`p-6 rounded border-2 text-left transition-colors ${
                      formData.productType === "secure"
                        ? "border-[#0f2744] bg-[#f8fafc]"
                        : "border-[#e2e8f0] hover:border-[#cbd5e1]"
                    }`}
                  >
                    <Badge variant="success" className="mb-3">Pre-Probate</Badge>
                    <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Secure</h3>
                    <p className="text-sm text-[#64748b] mb-4">
                      For expected inheritances before probate begins.
                    </p>
                    <ul className="space-y-2 text-sm text-[#475569]">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#059669]" />
                        Pre-probate funding
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#059669]" />
                        Flexible terms
                      </li>
                    </ul>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Personal Info */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-[#0f172a] mb-2">Personal Information</h2>
                  <p className="text-[#64748b]">Tell us about yourself.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-2">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => updateFormData("firstName", e.target.value)}
                      className="w-full h-11 px-4 rounded border border-[#e2e8f0] text-[#0f172a] focus:outline-none focus:border-[#0f2744] focus:ring-1 focus:ring-[#0f2744]"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-2">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => updateFormData("lastName", e.target.value)}
                      className="w-full h-11 px-4 rounded border border-[#e2e8f0] text-[#0f172a] focus:outline-none focus:border-[#0f2744] focus:ring-1 focus:ring-[#0f2744]"
                      placeholder="Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      className="w-full h-11 px-4 rounded border border-[#e2e8f0] text-[#0f172a] focus:outline-none focus:border-[#0f2744] focus:ring-1 focus:ring-[#0f2744]"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      className="w-full h-11 px-4 rounded border border-[#e2e8f0] text-[#0f172a] focus:outline-none focus:border-[#0f2744] focus:ring-1 focus:ring-[#0f2744]"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Estate Details */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-[#0f172a] mb-2">Estate Information</h2>
                  <p className="text-[#64748b]">Provide details about the estate.</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-2">Decedent&apos;s Name</label>
                    <input
                      type="text"
                      value={formData.estateName}
                      onChange={(e) => updateFormData("estateName", e.target.value)}
                      className="w-full h-11 px-4 rounded border border-[#e2e8f0] text-[#0f172a] focus:outline-none focus:border-[#0f2744] focus:ring-1 focus:ring-[#0f2744]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-2">Your Relationship</label>
                    <select
                      value={formData.relationship}
                      onChange={(e) => updateFormData("relationship", e.target.value)}
                      className="w-full h-11 px-4 rounded border border-[#e2e8f0] text-[#0f172a] focus:outline-none focus:border-[#0f2744] focus:ring-1 focus:ring-[#0f2744]"
                    >
                      <option value="">Select relationship</option>
                      <option value="child">Child</option>
                      <option value="spouse">Spouse</option>
                      <option value="sibling">Sibling</option>
                      <option value="grandchild">Grandchild</option>
                      <option value="other">Other Beneficiary</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-2">Estimated Estate Value</label>
                    <select
                      value={formData.estateValue}
                      onChange={(e) => updateFormData("estateValue", e.target.value)}
                      className="w-full h-11 px-4 rounded border border-[#e2e8f0] text-[#0f172a] focus:outline-none focus:border-[#0f2744] focus:ring-1 focus:ring-[#0f2744]"
                    >
                      <option value="">Select range</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="500k-1m">$500,000 - $1,000,000</option>
                      <option value="1m-5m">$1,000,000 - $5,000,000</option>
                      <option value="5m-10m">$5,000,000 - $10,000,000</option>
                      <option value="10m+">$10,000,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-2">Probate Status</label>
                    <select
                      value={formData.probateStatus}
                      onChange={(e) => updateFormData("probateStatus", e.target.value)}
                      className="w-full h-11 px-4 rounded border border-[#e2e8f0] text-[#0f172a] focus:outline-none focus:border-[#0f2744] focus:ring-1 focus:ring-[#0f2744]"
                    >
                      <option value="">Select status</option>
                      <option value="not-started">Not yet started</option>
                      <option value="filed">Filed, awaiting approval</option>
                      <option value="in-progress">In progress</option>
                      <option value="near-completion">Near completion</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Amount */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-[#0f172a] mb-2">Advance Amount</h2>
                  <p className="text-[#64748b]">How much funding do you need?</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-2">Requested Amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748b]">$</span>
                    <input
                      type="text"
                      value={formData.requestedAmount}
                      onChange={(e) => updateFormData("requestedAmount", e.target.value)}
                      className="w-full h-12 pl-8 pr-4 rounded border border-[#e2e8f0] text-xl text-[#0f172a] focus:outline-none focus:border-[#0f2744] focus:ring-1 focus:ring-[#0f2744]"
                      placeholder="100,000"
                    />
                  </div>
                  <p className="text-sm text-[#64748b] mt-2">Minimum: $50,000 · Maximum: $10,000,000</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-2">Purpose of Funds</label>
                  <select
                    value={formData.purpose}
                    onChange={(e) => updateFormData("purpose", e.target.value)}
                    className="w-full h-11 px-4 rounded border border-[#e2e8f0] text-[#0f172a] focus:outline-none focus:border-[#0f2744] focus:ring-1 focus:ring-[#0f2744]"
                  >
                    <option value="">Select purpose</option>
                    <option value="debt">Debt payoff</option>
                    <option value="investment">Investment opportunity</option>
                    <option value="real-estate">Real estate purchase</option>
                    <option value="business">Business funding</option>
                    <option value="personal">Personal expenses</option>
                  </select>
                </div>

                <div className="p-4 bg-[#fef3c7] rounded">
                  <p className="text-sm text-[#92400e]">
                    <strong>Estimated Terms:</strong> Based on similar applications, you may qualify for rates between 12-18% APR.
                  </p>
                </div>
              </div>
            )}

            {/* Step 5: Documents */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-[#0f172a] mb-2">Upload Documents</h2>
                  <p className="text-[#64748b]">Provide documentation to verify your inheritance.</p>
                </div>

                <div className="space-y-4">
                  {[
                    { title: "Death Certificate", required: true },
                    { title: "Will or Trust Document", required: true },
                    { title: "Probate Filing", required: formData.productType === "advance" },
                    { title: "Government ID", required: true },
                  ].map((doc) => (
                    <div
                      key={doc.title}
                      className="p-4 rounded border border-dashed border-[#cbd5e1] hover:border-[#94a3b8] transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Upload className="h-5 w-5 text-[#64748b]" />
                          <span className="font-medium text-[#0f172a]">
                            {doc.title}
                            {doc.required && <span className="text-[#dc2626] ml-1">*</span>}
                          </span>
                        </div>
                        <Button variant="outline" size="sm">Upload</Button>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#64748b]">Accepted formats: PDF, JPG, PNG · Max: 10MB</p>
              </div>
            )}

            {/* Step 6: Review */}
            {currentStep === 6 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-[#0f172a] mb-2">Review Application</h2>
                  <p className="text-[#64748b]">Please review your information before submitting.</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[#f8fafc] rounded">
                    <p className="text-xs text-[#64748b] uppercase tracking-wider">Product</p>
                    <p className="font-medium text-[#0f172a] capitalize">{formData.productType || "—"}</p>
                  </div>
                  <div className="p-4 bg-[#f8fafc] rounded">
                    <p className="text-xs text-[#64748b] uppercase tracking-wider">Amount</p>
                    <p className="font-medium text-[#0f172a]">${formData.requestedAmount || "—"}</p>
                  </div>
                  <div className="p-4 bg-[#f8fafc] rounded">
                    <p className="text-xs text-[#64748b] uppercase tracking-wider">Applicant</p>
                    <p className="font-medium text-[#0f172a]">{formData.firstName} {formData.lastName}</p>
                  </div>
                  <div className="p-4 bg-[#f8fafc] rounded">
                    <p className="text-xs text-[#64748b] uppercase tracking-wider">Estate</p>
                    <p className="font-medium text-[#0f172a]">{formData.estateName || "—"}</p>
                  </div>
                </div>

                <div className="p-4 bg-[#d1fae5] rounded">
                  <p className="text-sm text-[#065f46]">
                    <strong>Next steps:</strong> After submission, our team will verify your documents within 24 hours. Once verified, your application will go live on our marketplace.
                  </p>
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 rounded border-[#cbd5e1]" />
                  <span className="text-sm text-[#475569]">
                    I confirm that the information provided is accurate and I agree to the{" "}
                    <a href="#" className="text-[#0f2744] underline">Terms of Service</a> and{" "}
                    <a href="#" className="text-[#0f2744] underline">Privacy Policy</a>.
                  </span>
                </label>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#e2e8f0]">
              <Button variant="ghost" onClick={prevStep} disabled={currentStep === 1}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              {currentStep < 6 ? (
                <Button onClick={nextStep}>
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button>
                  Submit Application
                  <Check className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
