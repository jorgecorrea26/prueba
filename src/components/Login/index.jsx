import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Button, Form, Title, Span, Input, FlexChecks, Section } from "./styled"
import { faClose, faLock } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"

export const Login = () => {

    const [values, setValues] = useState({ password: '', confirmPassword: '' })

    const [validation, setValidation] = useState({ capitalize: false, oneNumber: false, match: false })

    const handleChange = (e) => {

        const { name, value } = e.target
        setValues({ ...values, [name]: value })

        if (values?.length) {
            let regex = /^(?=.*\d)(?=.*[\^$*.[\]{}()?\-\!@#%&\/,><':;|_~`+=])(?=.*[A-Z])(?=.*[a-z])\S{8,80}$/;
            const { password, confirmPassword } = values
            const onenumber = regex.test(password)
            const oneletters = regex.test(password)

            if (onenumber === true) setValidation({ ...validation, oneNumber: true })
            if (oneletters === true) setValidation({ ...validation, oneletters: true })
            if (password !== confirmPassword) setValidation({ ...validation, match: true })
        }
    }

    const handleValidate = () => {

        const { password, confirmPassword } = values
        let regex = /^(?=.*\d)(?=.*[\^$*.[\]{}()?\-\!@#%&\/,><':;|_~`+=])(?=.*[A-Z])(?=.*[a-z])\S{8,80}$/;

        if (password === confirmPassword) {

            const onenumber = regex.test(password).valueOf()
            const oneletters = regex.test(password).valueOf()

            setValidation({ ...validation, oneNumber: onenumber, oneletters: oneletters })
        }
        if (password !== confirmPassword) setValidation({ ...validation, match: true })
    }

    return (
        <Container>
            <Form>
                <Section marginB='20px'>
                    <Title>Home Kapital</Title>
                    <span>finance</span>
                </Section>
                <Section margin='25px 0'>
                    <FontAwesomeIcon size="6x" color="#3D88E2" icon={faLock} />
                </Section>
                <Section marginB='10px'>
                    <Span size='20px' fontWeight>Set Password</Span>
                </Section>
                <Section marginB='10px'>
                    <Span fontWeight size='16px' colorF='#3d88e2'>Type your new password</Span>
                </Section>
                <span>(At least 8 characters, one capital letter, one number and one special character)</span>
                <Input onChange={handleChange} value={values?.password} sname='password' type='password' />
                <Section>
                    <FlexChecks>
                        <FontAwesomeIcon color={values.password > 8 && 'red'} icon={values.password > 8 ? faClose : faCircleCheck} />
                        <span>Must have more than 8 characters</span>
                    </FlexChecks>
                    <FlexChecks>
                        <FontAwesomeIcon color={validation.capitalize && 'red'} icon={!validation.capitalize ? faCircleCheck : faClose} />
                        <span>must have at least one capital letter</span>
                    </FlexChecks>
                    <FlexChecks>
                        <FontAwesomeIcon color={validation.oneNumber && 'red'} icon={!validation.oneNumber ? faCircleCheck : faClose} />
                        <span>Must have at least one number</span>
                    </FlexChecks>
                    <FlexChecks>
                        <FontAwesomeIcon color={validation.lengitude && 'red'} icon={!validation.lengitude ? faCircleCheck : faClose} />
                        <span>Must have at least one special character</span>
                    </FlexChecks>
                </Section>
                <Input onChange={handleChange} value={values?.confirmPassword} name='confirmPassword' type='password' />
                <FlexChecks>
                    <FontAwesomeIcon color={validation.match && 'red'} icon={!validation.match ? faCircleCheck : faClose} />
                    <span>Passwords must match</span>
                </FlexChecks>
                <Button onClick={() => handleValidate()}>SET PASSWORD</Button>
            </Form>
        </Container >
    )
}