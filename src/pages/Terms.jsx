import React from 'react';
import { Helmet } from 'react-helmet';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Términos y Condiciones - The Good Mark</title>
        <meta name="description" content="Términos y condiciones de uso para los servicios de publicidad exterior de The Good Mark." />
      </Helmet>

      <div className="pt-20">
        <div className="bg-gray-50 py-12 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-[#01257D]" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
              Términos y Condiciones
            </h1>
            <p className="mt-4 text-gray-600">Última actualización: Diciembre 2024</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg prose-blue max-w-none" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <h3 className="text-[#01257D] font-bold">1. Introducción</h3>
            <p>
              Bienvenido a The Good Mark. Al acceder a nuestro sitio web y utilizar nuestros servicios de publicidad exterior, usted acepta cumplir con los siguientes términos y condiciones. Estos términos rigen la relación entre usted (el "Cliente") y The Good Mark.
            </p>

            <h3 className="text-[#01257D] font-bold mt-8">2. Servicios de Publicidad</h3>
            <p>
              The Good Mark ofrece servicios de arrendamiento de espacios publicitarios, incluyendo espectaculares y pantallas LED. La disponibilidad de los espacios está sujeta a confirmación previa. Nos reservamos el derecho de rechazar cualquier contenido publicitario que infrinja leyes locales, sea ofensivo o contravenga nuestros valores corporativos.
            </p>

            <h3 className="text-[#01257D] font-bold mt-8">3. Contratación y Pagos</h3>
            <p>
              Toda contratación requiere la firma de un contrato de prestación de servicios y el pago del anticipo acordado. Las tarifas están sujetas a cambios sin previo aviso, respetando siempre las cotizaciones vigentes dentro de su periodo de validez (15 días hábiles).
            </p>

            <h3 className="text-[#01257D] font-bold mt-8">4. Materiales y Producción</h3>
            <p>
              El Cliente es responsable de entregar los archivos de diseño con las especificaciones técnicas requeridas por The Good Mark. No nos hacemos responsables por retrasos en la instalación derivados de la entrega tardía o incorrecta de los materiales por parte del Cliente.
            </p>

            <h3 className="text-[#01257D] font-bold mt-8">5. Propiedad Intelectual</h3>
            <p>
              El Cliente garantiza que posee todos los derechos necesarios sobre las imágenes, marcas y textos utilizados en su publicidad. El Cliente libera a The Good Mark de cualquier responsabilidad legal relacionada con derechos de autor o propiedad intelectual del contenido exhibido.
            </p>

            <h3 className="text-[#01257D] font-bold mt-8">6. Cancelaciones</h3>
            <p>
              Las políticas de cancelación están estipuladas en el contrato individual de cada servicio. En general, cancelaciones con menos de 30 días de anticipación a la fecha de inicio de la campaña pueden generar penalizaciones.
            </p>

            <h3 className="text-[#01257D] font-bold mt-8">7. Contacto</h3>
            <p>
              Para cualquier duda sobre estos términos, por favor contáctenos en: thegoodmark1@gmail.com o al teléfono +52 618 103 2038.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;