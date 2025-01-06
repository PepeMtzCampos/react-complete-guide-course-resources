export default function Tabs({children, buttons, buttonsContainer}) {
    const ButtonContainer = buttonsContainer || 'ul';
    return (
        <>
        <ButtonContainer>
            {buttons}
        </ButtonContainer>
        {children}
        </>
    );
}