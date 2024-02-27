'use client'

import React, { useState } from 'react';
import { companiesData, Company } from '../utils/companyData';
import { LiaCaretRightSolid } from "react-icons/lia";

const JobDescription: React.FC<{ company: Company }> = ({ company }) => {
  const { name, jobTitle, date, responsibilities } = company;

  return (
    <div className='text-[#708090]'>
      <h2 className='py-2'>{jobTitle}<span className='text-[#00c1f5]'> @ {name}</span></h2>
      <p className='pb-5 text-xs'>{date}</p>
      <ol className='w-[110%] lg:w-[50%] md:w-[50%] sm:w-[50%] xl:w-[50%]'>
        {responsibilities.map((responsibility, index) => (
          <li className='mb-4 flex' key={index}>
            <span className='text-2xl'><LiaCaretRightSolid className='text-[#610000] mr-2 sm:mr-10 md:mr-10 lg:mr-10'/></span><p className='text-xs'>{responsibility.description}</p>         
          </li>
        ))}
      </ol>
    </div>
  );
};

const ButtonPanel: React.FC<{ companies: Company[]; onSelectCompany: (company: Company) => void }> = ({ companies, onSelectCompany }) => {
  return (
    <div>
      {companies.map((company, index) => (
        <button className='mr-2 lg:flex lg:mr-12 xl:mr-12 md:mr-12 text-xs border-l tries text-[#708090] p-4 focus:border-[#00c1f5] focus:text-[#00c1f5] focus:bg-[#002244]' key={index} onClick={() => onSelectCompany(company)}>
          {company.name}
        </button>
      ))}
    </div>
  );
};
const Experience: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<Company>(companiesData['Signapse']);

  const handleSelectCompany = (company: Company) => {
    setSelectedCompany(company);
  };

  const companies: Company[] = Object.values(companiesData);

  return (
   <section id='experience' className='h-[100vh] mt-10 content-center'>
    <div className='flex mb-10'>
         <div className='ml-10 sm:ml-[220px] xl:ml-[400px] text-3xl text-[#708090] flex mr-10'>
                <span className='text-[#00c1f5]'>02.</span> Experience</div>
        <div className='h-4 w-[10%] border-b border-[#610000]'></div>
    </div>
    <div className='flex lg:flex ml-10 sm:ml-[220px] xl:ml-[400px]'>
      <ButtonPanel companies={companies} onSelectCompany={handleSelectCompany} />
      <JobDescription company={selectedCompany} />
    </div>
    </section>

  );
};

export default Experience;
