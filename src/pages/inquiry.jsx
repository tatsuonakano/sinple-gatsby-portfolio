import * as React from "react"
import Layout from "../components/layout/layout"
import { Link } from "gatsby"
import Button from '@mui/material/Button';
import { FormControl,InputLabel,Input,FormHelperText,TextField,Stack, } from '@mui/material';

const Inquiry = () => {
  return (
<Layout>
<hr/>
<h1>問い合わせ</h1>

<Stack component="form" spacing={2} >
<hr/>
<FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
  </FormControl>
  <TextField/>

  <Button variant="contained">
    送信する
  </Button>
</Stack>

<hr/>
<Link to="/">サイトトップへ戻る</Link>

<hr/>

</Layout>
)
}

export default Inquiry
