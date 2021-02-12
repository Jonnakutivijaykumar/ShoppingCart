import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native'
import LottieView from 'lottie-react-native'
import CreditCardForm, { Button, FormModel } from 'rn-credit-card'

const CreditCard = () => {
  const formMethods = useForm({
    // to trigger the validation on the blur event
    mode: 'onBlur',
    defaultValues: {
      holderName: '',
      cardNumber: '',
      expiration: '',
      cvv: '',
    },
  })
  const { handleSubmit, formState } = formMethods

  function onSubmit(model) {
    Alert.alert('Success: ' + JSON.stringify(model, null, 2))
  }

  return (
    <FormProvider {...formMethods}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.avoider}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <CreditCardForm
            LottieView={LottieView}
            horizontalStart
            inputColors={{
                focused: '#fff',
                errored: '#fff',
                regular: '#B9C4CA',
              }}
              autoFocus={false}
            overrides={{
                errorText:{
                    color:'#fff'
                },
                input:{
                    color:'#fff',
                    borderTopWidth:0,
                    borderLeftWidth:0,
                    borderRightWidth:0
                },
                inputLabel:{
                  backgroundColor:'#3a3b42',
                    // backgroundColor:'rgb(64 64 73)'

                },
                labelContainer:{
                     backgroundColor:'',
                },
                outline:{
                    width:5
                },
                cardPreview:{
                    margin:5,
                    fontSize:15
                },
              labelText: {
                // marginTop: 10,
                color:'#fff'
              },
            }}
          />
        </KeyboardAvoidingView>
        {/* {formState.isValid && ( */}
          <Button
            style={styles.button}
            title={'Check Out'}
            onPress={handleSubmit(onSubmit)}
          />
        {/* )} */}
      </SafeAreaView>
    </FormProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avoider: {
    flex: 1,
  },
  button: {
    // margin: 36,
    backgroundColor:'#2d7aed',
    marginTop: 0,
  },
})

export default CreditCard