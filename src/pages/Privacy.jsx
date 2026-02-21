import React from 'react';
import { Helmet } from 'react-helmet';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad - The Good Mark</title>
        <meta name="description" content="Política de privacidad y protección de datos personales de The Good Mark." />
      </Helmet>

      <div className="pt-20">
        <div className="bg-gray-50 py-12 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-[#01257D]" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
              Política de Privacidad
            </h1>
            <p className="mt-4 text-gray-600">Última actualización: Diciembre 2024</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg prose-blue max-w-none" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <h3 className="text-[#01257D] font-bold">1. Responsable de los Datos</h3>
            <p>
              The Good Mark, con domicilio en Durango, México, es responsable del tratamiento de sus datos personales. Estamos comprometidos con la protección de su privacidad y el manejo seguro de su información.
            </p>

            <h3 className="text-[#01257D] font-bold mt-8">2. Datos que Recopilamos</h3>
            <p>
              Podemos recopilar la siguiente información personal cuando usted solicita una cotización o nos contacta:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Nombre de la empresa</li>
              <li>Información sobre sus necesidades publicitarias</li>
            </ul>

            <h3 className="text-[#01257D] font-bold mt-8">3. Finalidad del Tratamiento</h3>
            <p>
              Utilizamos sus datos personales exclusivamente para:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Proveer los servicios y productos solicitados.</li>
              <li>Enviarle cotizaciones e información comercial relevante.</li>
              <li>Facturación y cobranza.</li>
              <li>Mejorar la calidad de nuestro servicio al cliente.</li>
            </ul>

            <h3 className="text-[#01257D] font-bold mt-8">4. Protección de Datos</h3>
            <p>
              Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado. No vendemos, rentamos ni compartimos su información con terceros con fines comerciales sin su consentimiento.
            </p>

            <h3 className="text-[#01257D] font-bold mt-8">5. Derechos ARCO</h3>
            <p>
              Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (Derechos ARCO). Para ejercer estos derechos, por favor envíe una solicitud por escrito a nuestro correo electrónico de contacto: thegoodmark1@gmail.com.
            </p>

            <h3 className="text-[#01257D] font-bold mt-8">6. Cambios al Aviso de Privacidad</h3>
            <p>
              Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad. Estas modificaciones estarán disponibles al público a través de nuestro sitio web.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;