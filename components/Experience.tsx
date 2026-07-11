'use client'

import { useState } from 'react'
import { companiesData, Company } from '../utils/companyData'
import { LiaCaretRightSolid } from 'react-icons/lia'
import Section from './Section'
import SectionHeading from './SectionHeading'

type JobDescriptionProps = {
  company: Company
}

const JobDescription = ({ company }: JobDescriptionProps) => {
  const { name, jobTitle, location, date, responsibilities } = company

  return (
    <div className="min-w-0 flex-1 text-body">
      <h3 className="text-sm font-medium leading-snug sm:text-base">
        {jobTitle}
        <span className="text-accent"> @ {name}</span>
      </h3>
      <p className="mt-1 text-xs">{location}</p>
      <p className="mb-5 mt-1 text-xs">{date}</p>
      <ul className="space-y-4">
        {responsibilities.map((responsibility, index) => (
          <li className="flex gap-3 text-xs leading-relaxed sm:text-sm" key={index}>
            <LiaCaretRightSolid className="mt-0.5 shrink-0 text-divider" />
            <span>{responsibility.description}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

type ButtonPanelProps = {
  companies: Company[]
  selectedName: string
  onSelectCompany: (company: Company) => void
}

const ButtonPanel = ({ companies, selectedName, onSelectCompany }: ButtonPanelProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 md:flex-col md:overflow-visible md:pb-0 md:pr-8">
      {companies.map((company) => {
        const isSelected = company.name === selectedName
        return (
          <button
            type="button"
            key={company.name}
            onClick={() => onSelectCompany(company)}
            className={`shrink-0 border-l-2 px-4 py-3 text-left text-xs transition-colors md:w-full ${
              isSelected
                ? 'border-accent bg-[#002244] text-accent'
                : 'border-[#233554] text-body hover:border-accent hover:text-accent'
            }`}
          >
            {company.name}
          </button>
        )
      })}
    </div>
  )
}

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState<Company>(companiesData['FXDigital'])
  const companies: Company[] = Object.values(companiesData)

  return (
    <Section id="experience">
      <SectionHeading number="02" title="Experience" />
      <div className="flex flex-col gap-8 md:flex-row">
        <ButtonPanel
          companies={companies}
          selectedName={selectedCompany.name}
          onSelectCompany={setSelectedCompany}
        />
        <JobDescription company={selectedCompany} />
      </div>
    </Section>
  )
}

export default Experience
