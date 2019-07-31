/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button, Form, Input } from 'antd';
import { WrappedFormInternalProps } from 'antd/lib/form/Form';
import { SyntheticEvent } from 'react';

import { formContainer } from './bookmark-form.styles';

const FormItem = Form.Item;

interface BookMarkFormProps extends WrappedFormInternalProps {}

const BookmarkFormComponent = ({ form }: BookMarkFormProps) => {
  const { getFieldDecorator, validateFields } = form;

  const handleOnSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    validateFields((err, values) => {
      if (err) return;

      // this is where we submit to storage adapter
      console.log(values);
    });
  };

  return (
    <div css={formContainer}>
      <Form onSubmit={handleOnSubmit}>
        <FormItem label="Page Title">
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please enter a page title' }],
          })(<Input />)}
        </FormItem>
        <FormItem label="URL">
          {getFieldDecorator('url', {
            rules: [{ required: true, message: 'Please enter a URL' }],
          })(<Input />)}
        </FormItem>
        <FormItem label="Category">
          {getFieldDecorator('category', {})(<Input />)}
        </FormItem>
        <FormItem label="Tags">
          {getFieldDecorator('tags', {})(<Input />)}
        </FormItem>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export const BookmarkForm = Form.create()(BookmarkFormComponent);
