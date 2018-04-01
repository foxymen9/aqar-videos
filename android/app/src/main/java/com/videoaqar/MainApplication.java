package com.videoaqar;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.devfd.RNGeocoder.RNGeocoderPackage;
import com.RNTextInputMask.RNTextInputMaskPackage;
import com.horcrux.svg.SvgPackage;
import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
import com.imagepicker.ImagePickerPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.airbnb.android.react.maps.MapsPackage;
import ca.jaysoo.extradimensions.ExtraDimensionsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNGeocoderPackage(),
            new RNTextInputMaskPackage(),
            new SvgPackage(),
            new RNI18nPackage(),
            new ImagePickerPackage(),
            new ReactVideoPackage(),
            new RCTCameraPackage(),
            new VectorIconsPackage(),
            new MapsPackage(),
            new ExtraDimensionsPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
