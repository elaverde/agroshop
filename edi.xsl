<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fn="http://www.w3.org/2005/02/xpath-functions" xmlns:fo="http://www.w3.org/1999/XSL/Format" xmlns:fox="http://xml.apache.org/fop/extensions">
	<!-- Borde externo --> 
	<xsl:variable name="dirimagenes">
		<xsl:value-of select="/Carta/@pathImages"/>
	</xsl:variable>
	<xsl:template match="/">
		<fo:root xmlns:fo="http://www.w3.org/1999/XSL/Format">
			<fo:layout-master-set>
				<fo:simple-page-master master-name="repeating" page-height="29.7cm" page-width="21cm" margin-top="0cm" margin-bottom="0cm" margin-left="0cm" margin-right="0cm">
					<fo:region-body margin-top="1.8cm" margin-bottom="2cm" margin-left="2cm" margin-right="1.5cm"/>
					<fo:region-before extent="0cm"/>
					<fo:region-after extent="3.78cm"/>
               <fo:region-start extent="0cm"/>
				</fo:simple-page-master>
			</fo:layout-master-set>
			<fo:page-sequence master-reference="repeating">
   			<!--Definimos el pie de pagina-->
	            <fo:static-content flow-name="xsl-region-start">
	               <fo:block-container reference-orientation="90" inline-progression-dimension="200mm">
	                  <fo:block font-size="2mm" font-family="Calibri" color="steelblue" margin-top="0.5cm">
	                     Reporte Dora
	                  </fo:block>
	                  <fo:block font-size="2mm" font-family="Calibri" color="steelblue">
	                     :)
	                  </fo:block>
	               </fo:block-container>
	            </fo:static-content>
	            <fo:static-content flow-name="xsl-region-after">
	               <fo:block>
					 Ejemplos de Reporte
	               </fo:block>
	            </fo:static-content>
			<!--Bloque FLOW del cuerpo del PDF-->
		   <fo:flow flow-name="xsl-region-body">
          <fo:block font-size="14pt" font-weight="bold">Informe de Recomendaciones</fo:block>

          <xsl:for-each select="Informe/RECOMENDACIONES/RECOMENDACION">
            <fo:block space-before="10pt">
              <fo:inline font-weight="bold">
                <xsl:value-of select="ID"/> - <xsl:value-of select="AREA"/>
              </fo:inline>
              <fo:block><xsl:value-of select="DESCRIPCION"/></fo:block>
              <fo:block font-style="italic" color="blue">
                Estado: <xsl:value-of select="ESTADO"/>
              </fo:block>
            </fo:block>
          </xsl:for-each>

        </fo:flow>
			</fo:page-sequence>
		</fo:root>
	</xsl:template>
</xsl:stylesheet>