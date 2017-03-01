---
version: v1.6.2
permalink: /docs/api/structures/certificate/
category: API
source_url: >-
  https://github.com/electron/electron/blob/master/docs/api/structures/certificate.md
title: Certificate Object
excerpt: ''
sort_title: certificate
---
# Certificate Object

*   `data` String - PEM encoded data
*   `issuer` [CertificatePrincipal]({{site.baseurl}}/docs/api/structures/certificate-principal) - Issuer principal
*   `issuerName` String - Issuer's Common Name
*   `issuerCert` Certificate - Issuer certificate (if not self-signed)
*   `subject` [CertificatePrincipal]({{site.baseurl}}/docs/api/structures/certificate-principal) - Subject principal
*   `subjectName` String - Subject's Common Name
*   `serialNumber` String - Hex value represented string
*   `validStart` Number - Start date of the certificate being valid in seconds
*   `validExpiry` Number - End date of the certificate being valid in seconds
*   `fingerprint` String - Fingerprint of the certificate
