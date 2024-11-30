import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, Pressable } from 'react-native';
import { Input, Icon } from '../atoms';
import { useThemeColor } from '../../hooks/useThemeColor';
import Eye from '../../assets/eye.svg';
import EyeLight from '../../assets/eye_light.svg';
import EyeOff from '../../assets/eye_off.svg';
import EyeOffLight from '../../assets/eye_off_light.svg';
import { Feather } from '@expo/vector-icons';
import { useThemeStore } from '../../store/ThemeStore';

const LabeledInput = ({
  label,
  value,
  onChangeText,
  mandatory = true,
  icon = null,
  renderMeter = false,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);
  const labelRef = useRef(null);
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const theme = useThemeStore((state) => state.theme);
  const dimmedLight = useThemeColor("dimmedLight");
  const primaryLight = useThemeColor("primaryLight");

  const togglePasswordVisibility = () => {
    setIsPasswordSecure(!isPasswordSecure);
  };

  const handleFocus = () => {
    setIsFocused(true);
   
    if (!value) {
      labelRef.current.animate(
        {
          0: {
            translateY: 0,
            translateX: 0,
            fontSize: 15,
            color: dimmedLight,
          },
          1: {
            translateY: -27,
            translateX: -10,
            fontSize: 12,
            color: primaryLight,
          },
        },
        400
      );
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {

      setHasValue(false);
      labelRef.current.animate(
        {
          0: {
            translateY: -27,
            translateX: -10,
            fontSize: 12,
            color: primaryLight,
          },
          1: {
            translateY: 0,
            translateX: 0,
            fontSize: 15,
            color: dimmedLight,
          },
        },
        400
      );
    }
  };

  const renderEyeIcon = () => {
    if (icon === 'eye') {
      return (
        <Pressable
          onPress={togglePasswordVisibility}
          style={{
            position: 'absolute',
            right: 10,
            paddingHorizontal: 5,
            top: 8,
            bottom: 0,
          }}
        >
          <Icon.Base
            source={isPasswordSecure ? theme === 'light' ? EyeLight : Eye : theme === 'light' ? EyeLight : EyeOff}
            width={24}
            height={24}
          />
        </Pressable>
      );
    }
  };

  const handleChangeText = (text) => {
    onChangeText(text);
    setHasValue(!!text);
  };

  useEffect(() => {
    if (value) {
      labelRef.current.setNativeProps({
        style: {
          transform: [{ translateY: -27 }, { translateX: -10 }],
          fontSize: 12,
          color: primaryLight,
        },
      });
      setHasValue(true);
    }
  }, [value]);

  return (
    <View
      style={{
        position: 'relative',
        width: props.width ? props.width : '100%',
      }}
    >
      <Input.Base
        value={value}
        onChangeText={handleChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isFocused={isFocused}
        secureTextEntry={icon === 'eye' && isPasswordSecure}
        {...props}
      />
      <Input.Label
        label={label}
        hasValue={hasValue}
        isFocused={isFocused}
        labelRef={labelRef}
        mandatory={mandatory}
      />
      {/* Add logic for icons if needed */}
      {renderEyeIcon()}
      {icon === 'feather' && (
        <Feather
          name="search"
          size={20}
          color={useThemeColor("primaryLight")}
          style={{
            position: 'absolute',
            right: 10,
            top: 10,
          }}
        />
      )}

    </View>
  );
};

export default LabeledInput;
