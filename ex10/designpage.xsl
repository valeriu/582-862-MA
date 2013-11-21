<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
	<html>
		<head>
			<style>
				img {
					float:left;
					margin-right:10px;
				}
				article {
					float:left;
					width: 23%;
					height: 300px;
					min-width:250px;
					max-width:300px;
					margin:10px;
					overflow:hidden;
				}
			</style>
		</head>
		<body>
		<h1><xsl:value-of select="rss/channel/title" /></h1>
		<div class="rss">
			<div class="imageurl"><img src="{rss/channel/image/url}" alt="{rss/channel/image/title}"/></div>
			<div class="desc"><xsl:value-of select="rss/channel/description" /></div>
			<div class="update">Mise à jour à <xsl:value-of select="rss/channel/lastBuildDate" /></div>
		</div>
		<xsl:for-each select="rss/channel/item">
			<article>
				<h2>
					<a target="_blank" href="{link}">
						<xsl:value-of select="title" />
					</a>
				</h2>
				<div class="date"><xsl:value-of select="pubDate" /></div>
				<p>
					<img src="{enclosure/@url}" alt="{title}"/>
					<xsl:value-of select="description" />
				</p>
			</article>
		</xsl:for-each>
		</body>
	</html>
</xsl:template>
</xsl:stylesheet>