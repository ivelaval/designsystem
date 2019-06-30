import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const TextArea = ({
  className,
  id,
  labelText,
  hideLabel,
  onChange,
  onClick,
  invalid,
  invalidText,
  helperText,
  light,
  ...other
}) => {
  const textareaProps = {
    id,
    onChange: evt => {
      if (!other.disabled) {
        onChange(evt);
      }
    },
    onClick: evt => {
      if (!other.disabled) {
        onClick(evt);
      }
    },
  };

  const textareaClasses = classNames('wfp--text-area', className, {
    'wfp--text-area--light': light,
  });
  const labelClasses = classNames('wfp--label', {
    'wfp--visually-hidden': hideLabel,
  });

  const label = labelText ? (
    <label htmlFor={id} className={labelClasses}>
      {labelText}
    </label>
  ) : null;

  const error = invalid ? (
    <div className="wfp--form-requirement">{invalidText}</div>
  ) : null;

  const input = invalid ? (
    <textarea
      {...other}
      {...textareaProps}
      className={textareaClasses}
      data-invalid
    />
  ) : (
    <textarea {...other} {...textareaProps} className={textareaClasses} />
  );

  const helper = helperText ? (
    <div className="wfp--form__helper-text">{helperText}</div>
  ) : null;

  return (
    <div className="wfp--form-item">
      {label}
      {input}
      {helper}
      {error}
    </div>
  );
};

TextArea.propTypes = {
  /**
   * Provide a custom className that is applied directly to the underlying
   * &lt;textarea&gt; node
   */
  className: PropTypes.string,

  /**
   * Specify the `cols` attribute for the underlying &lt;textarea&gt; node
   */
  cols: PropTypes.number,

  /**
   * Optionally provide the default value of the &lt;textarea&gt;
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specify whether the control is disabled
   */
  disabled: PropTypes.bool,

  /**
   * Provide a unique identifier for the control
   */
  id: PropTypes.string,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: PropTypes.node.isRequired,

  /**
   * Optionally provide an `onChange` handler that is called whenever &lt;textarea&gt;
   * is updated
   */
  onChange: PropTypes.func,

  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * &lt;textarea&gt; is clicked
   */
  onClick: PropTypes.func,

  /**
   * Specify the placeholder attribute for the &lt;textarea&gt;
   */
  placeholder: PropTypes.string,

  /**
   * Specify the rows attribute for the &lt;textarea&gt;
   */
  rows: PropTypes.number,

  /**
   * Provide the current value of the &lt;textarea&gt;
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specify whether the control is currently invalid
   */
  invalid: PropTypes.bool,

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText: PropTypes.string,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes.node,

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: PropTypes.bool,

  /**
   * Specify whether you want the light version of this control
   */
  light: PropTypes.bool,
};

TextArea.defaultProps = {
  disabled: false,
  onChange: () => {},
  onClick: () => {},
  placeholder: '',
  rows: 4,
  cols: 50,
  invalid: false,
  invalidText: '',
  helperText: '',
  light: false,
};

export default TextArea;
