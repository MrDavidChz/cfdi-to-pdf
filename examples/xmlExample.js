// EXAMPLE
const xmlExample = `
<cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/3" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sat.gob.mx/cfd/3 http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd" Version="3.3" Serie="A" Folio="100" Fecha="2019-05-23T17:10:15" FormaPago="01" NoCertificado="20001000000300022823" SubTotal="837.00" Moneda="MXN" Total="970.92" TipoDeComprobante="I" MetodoPago="PUE" LugarExpedicion="06500" Sello="brqNxLEDKMwcbBvDMUPrJ5DH5wV/IVKTAH4iQ++2RAqT/VykOELgKNSIQL6okwutxOLd+XH9R3MRmk2QBqLtYFz3K2YglS7dKNAEypQIRWCB/3lyu5CHlwOsG1azoC8c06RgELHwx+VGlIa7CzW5wZczhw198hYmj4KwofvwYoGE2qN3QGG/wTMUkmHyasqaXsaMufyVDk/f238T99ijohWBE3MJtoi4Vj1qYx9UErK5I80qK+uKmC4n0M02EYcQyA1FLEL1AofO1CHx7ejuQh+71dmFjVWxtQs1j01RCdlxWgvs3L6eGW8hhzjxFxt2VEAwnP+Rm81M3qIXTOVAiQ==" Certificado="MIIDhDCCAmygAwIBAgIUMjAwMDEwMDAwMDAzMDAwMjI4MjMwDQYJKoZIhvcNAQEFBQAwSzEVMBMGA1UEAwwMQS5DLiBQcnVlYmFzMRAwDgYDVQQKDAdQcnVlYmFzMQswCQYDVQQGEwJNWDETMBEGA1UEBwwKQ3VhdWh0ZW1vYzAeFw0xNzA0MjgxODMwMzZaFw0yMjEwMTkxODMwMzZaMIGQMRswGQYDVQQDDBJQYWJsbyBOZXJ1ZGEgUGVyZXoxGzAZBgNVBCkMElBhYmxvIE5lcnVkYSBQZXJlejEbMBkGA1UECgwSUGFibG8gTmVydWRhIFBlcmV6MSUwIwYDVQQtDBxURVNUMDEwMjAzMDAxIC8gVEVTVDEwMzE3QTQ2MRAwDgYDVQQLDAdDRU5UUkFMMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4S8y29PfV6zBib8HEx/SK2XaUBeAb5YZbL+MHjX4K710kFdskgYhX35N0StfN5wbHLIsnj0eLtIk7gjXmaAjF6PkM9jtRtUrWgS22lcah0K7ws+nqfhNFuPX9rfm8SXzkBFDjUiBmW0U0Lz3cT/fEoJiqMxTwgJyhpuQ3vIcrv85cUaNpnf85eSCWVXGFmXpZD7EgXKLQulD1OOQbqcBPF6sK0wlz27HeQsM0X+2rO+RJvWAsHqIT4z0Sct4FFzj3XjGiF+DK8KxbQOmWpTnOSw0k9oKHmrFG3c1GxxyhvHoz+RurZFWPwuCWAzaUDhwq3uB6dtP7foeEjUUFlRD/wIDAQABoxowGDAJBgNVHRMEAjAAMAsGA1UdDwQEAwIGwDANBgkqhkiG9w0BAQUFAAOCAQEAl/4v3mCKfiwvPqmtFOnQ5HomJQq5W351gC5vKwP4vDKSdFDsvKtU5UMET6AnN6zHdI13AIZiOQQ8t1yv8RByMQ8dSHaoWaBkR0thzbK+Uol91Rp/TffNfneESAqvfBWKwXBTxGIxTNkJl5XXG5SyChRIan2sXvrSEGmfqxzzf3X5QFeQstRw80RbUWS21PGSgC9LMGkQVd76wqujP6P/QPjbYes5PD3xV0+6vbm3Q2NGj24s42I4Op2UEX+QjkTMd2o6FY2ek1zzcVjCyN2eNRgb/OKDjfiA/tyJ0HV1JxW3nc7BgIpRuHRI63NLWzIxe8233LgIf+y1oypT2W/o9Q==">
<cfdi:Emisor Rfc="TEST010203001" Nombre="EMPRESA DE PRUEBA" RegimenFiscal="612"/>
<cfdi:Receptor Rfc="XAXX010101000" Nombre="NA" UsoCFDI="G03"/>
<cfdi:Conceptos>
<cfdi:Concepto ClaveProdServ="80131502" NoIdentificacion="47" Cantidad="1.00" ClaveUnidad="E48" Descripcion="Complemento de Renta Local 05, 06 y 07, correspondiente al 28 de Diciembre del 2018" ValorUnitario="837.0000" Importe="837.0000">
<cfdi:Impuestos>
<cfdi:Traslados>
<cfdi:Traslado Base="837" Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="133.92"/>
</cfdi:Traslados>
</cfdi:Impuestos>
</cfdi:Concepto>
</cfdi:Conceptos>
<cfdi:Impuestos TotalImpuestosTrasladados="133.92">
<cfdi:Traslados>
<cfdi:Traslado Impuesto="002" TipoFactor="Tasa" TasaOCuota="0.160000" Importe="133.92"/>
</cfdi:Traslados>
</cfdi:Impuestos>
<cfdi:Complemento>
<tfd:TimbreFiscalDigital xmlns:tfd="http://www.sat.gob.mx/TimbreFiscalDigital" Version="1.1" RfcProvCertif="PAC010101TE0" UUID="E9F16207-7E57-7E57-7E57-7EFC32BA4869" FechaTimbrado="2019-05-23T17:10:53" SelloCFD="brqNxLEDKMwcbBvDMUPrJ5DH5wV/IVKTAH4iQ++2RAqT/VykOELgKNSIQL6okwutxOLd+XH9R3MRmk2QBqLtYFz3K2YglS7dKNAEypQIRWCB/3lyu5CHlwOsG1azoC8c06RgELHwx+VGlIa7CzW5wZczhw198hYmj4KwofvwYoGE2qN3QGG/wTMUkmHyasqaXsaMufyVDk/f238T99ijohWBE3MJtoi4Vj1qYx9UErK5I80qK+uKmC4n0M02EYcQyA1FLEL1AofO1CHx7ejuQh+71dmFjVWxtQs1j01RCdlxWgvs3L6eGW8hhzjxFxt2VEAwnP+Rm81M3qIXTOVAiQ==" NoCertificadoSAT="20001000000300022323" SelloSAT="KYpf4CX+lobk2cQt7+0ZAHKzU/trWEcScnbe96ZD3wHikYTmxQ2LtfhfzZLgso5bEqng5KQd2ZmQADhJhlpIC2RXVyhrHHqy3zd/Zf6whVxwQzfnhMSFqpmrlHXMO9u1ZqZcqdVIzl/DQK5JUVsGFLttTeVIRBE1GMlSv55LjEAIE4b9PgSvKy+3FwhyGY/T/P8cJjI6yrReEIYU07vUc/DZyFv8ipXeMPjkFfEdYX2Xh7l2aKdZOK/fIuBTO/xvVMUz5y6riq4E3xEb2az0EUmRJKQzifsNy+tphlYjfcd3c48a3OVj2hRrLk2POkgelzeUNWXQZOyyZ+QHXu+1kg==" xsi:schemaLocation="http://www.sat.gob.mx/TimbreFiscalDigital http://www.sat.gob.mx/sitio_internet/cfd/TimbreFiscalDigital/TimbreFiscalDigitalv11.xsd"/>
</cfdi:Complemento>
</cfdi:Comprobante>
`;

module.exports = xmlExample;
