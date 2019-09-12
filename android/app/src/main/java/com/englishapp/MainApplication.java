package com.englishapp;

import android.app.Application;
import android.util.Log;

import com.facebook.react.PackageList;
import com.facebook.hermes.reactexecutor.HermesExecutorFactory;
import com.facebook.react.bridge.JavaScriptExecutorFactory;
import com.facebook.react.ReactApplication;
import com.vinzscam.reactnativefileviewer.RNFileViewerPackage;
import com.rnfs.RNFSPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import com.oblador.vectoricons.VectorIconsPackage;
import java.util.Arrays;
import java.util.List;
import com.facebook.react.shell.MainReactPackage;
import com.inprogress.reactnativeyoutube.ReactNativeYouTube;

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
            new RNFileViewerPackage(),
            new RNFSPackage(),
            new LinearGradientPackage(),
            new VectorIconsPackage(),
            new ReactNativeYouTube()
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
