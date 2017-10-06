# Consumindo dados do TerraMA² como serviço

## Introdução

Uma das tecnologias por trás do [**TerraMA²**](http://www.dpi.inpe.br/terrama2/) é o [GeoServer](http://geoserver.org/about/), que é um servidor de código livre e aberto escrito em Java para publicação de dados geoespaciais usando padrões abertos definidos pelo [_Open Geospatial Consortium_](http://www.opengeospatial.org/ogc) (OGC).

Dentre os padrões suportados pelo GeoServer, destacam-se o [_Web Map Service_](http://www.opengeospatial.org/standards/wms) (WMS) para criação de mapas em vários formatos de saída (GIF, JPEG, PNG etc.) e o [_Web Feature Service_](http://www.opengeospatial.org/standards/wfs) (WFS) para compartilhamento, em diversos formatos de saída também (CSV, GeoJSON, KML etc.), dos dados usados para gerar os mapas.

Os padrões WMS e WFS devem ser adotados pelos órgãos do Poder Executivo Federal para o intercâmbio de informações georreferenciadas e a interoperabilidade de sistemas de informação geográfica (SIG), em conformidade com os [Padrões de Interoperabilidade de Governo Eletrônico](http://eping.governoeletronico.gov.br/) (ePING), de acordo com a [Portaria nº 92](http://pesquisa.in.gov.br/imprensa/jsp/visualiza/index.jsp?jornal=1&pagina=50&data=26/12/2014), de 24/12/2014, da Secretaria de Logística e Tecnologia da Informação do Ministério do Planejamento, Desenvolvimento e Gestão.

As implementações desses padrões oferecem uma interface de acesso a dados geoespaciais através do protocolo [_Hypertext Transfer Protocol_](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview) (HTTP), tornando possível o consumo desses dados na _Web_.

O [_Web Monitor_](https://github.com/TerraMA2/terrama2/tree/master/webmonitor) da plataforma **TerraMA²**, por exemplo, é uma aplicação _Web_ que consome dados do serviço de visualização da própria plataforma por meio de requisições HTTP ao serviço WMS provido pelo GeoServer integrado à plataforma. Para isso, utiliza a [OpenLayers](https://openlayers.org/), que é uma biblioteca escrita em JavaScript que facilita a criação de mapas em páginas da _Web_.

Portanto, a arquitetura do **TerraMA²** permite que os dados dos serviços de coleta, análise, alerta e visualização sejam consumidos tanto dentro quanto fora da plataforma. Isso faz do **TerraMA²** flexível o bastante para se integrar aos SIG e demais sistemas já existentes na organização.

## Oficina

O principal objetivo dessa oficina é demonstrar como consumir os dados do **TerraMA²** fora da plataforma. Para isso, será construída uma página da _Web_ simples contendo exemplos de consumo de uma camada de dados estáticos, outra de dados dinâmico, uma de análise, outra de alerta.
