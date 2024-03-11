import { FC, forwardRef, TextareaHTMLAttributes } from 'react';

import * as S from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    disabled?: boolean;
}

export const TextArea: FC<TextAreaProps> = forwardRef<
    HTMLTextAreaElement,
    TextAreaProps
>((props, ref) => {
    return (
        <S.Wrapper className="textarea-wrapper" disabled={props.disabled}>
            <textarea {...props} ref={ref} />
        </S.Wrapper>
    );
});

TextArea.displayName = 'TextArea';
