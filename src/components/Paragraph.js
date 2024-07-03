import React from 'react';

const ParagraphComponent = () => {
  const htmlContent = `
    <h1>Paragraph Samples</h1>
    <p><b>A well-organized</b> paragraph supports or develops a single <b>controlling idea</b>,<br> which is expressed in a sentence called the  <s>topic sentence</s>.A topic sentence<br>
has several important functions: it substantiates or supports an essay's thesis <br><font size=2>statement</font>;
<br></br>
Although most<font color="red"> paragraphs</font> should have a  topic sentence,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;there are a <br>
few situations when  a paragraph might not need a topic sentence. For example,<br>
you might be able to omit a <u>topic sentence</u> in a paragraph that narrates a series <br>of events.
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default ParagraphComponent;
