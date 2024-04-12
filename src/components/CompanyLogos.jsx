import { companyLogos } from '../constants';

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <p className="body-1 max-w-4xl mx-auto mb-12 text-center text-n-2 lg:mb-8">
        Naprawiam ludzi, plecy, ciało oraz twój nastrój. <br />
        Tutaj zapomnisz o bólu kręgosłupa i stresie.
        <br />
        Pomogę Ci zbudować wymarzone ciało. <br />
        Salon Profesjonalnego masażu w Białymstoku.
      </p>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[24.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
