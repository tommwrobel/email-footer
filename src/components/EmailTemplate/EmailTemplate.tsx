import {ReactElement, useEffect, useState} from "react";

type EmailTemplateProps = {
    template: string;
}

const EmailTemplate = ({ template }: EmailTemplateProps): ReactElement => {

    return <div dangerouslySetInnerHTML={{ __html: template }}></div>
}

export default EmailTemplate;
