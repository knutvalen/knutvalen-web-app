// prettier-ignore
export const codeBlock1 =
`import UIKit

protocol LightSideScreenViewType {
    var presenter: LightSideScreenPresenterType? { get set }
    func set(title: String?)
    func set(jediCode: LightSideScreenEntityType.JediCode?)
    func set(loading isLoading: Bool)
    func refreshJediList()
}

protocol LightSideScreenInteractorType {
    var entity: LightSideScreenEntityType? { get set }
    var webService: WebServiceType? { get set }
    func getCode(completionHandler: @escaping JediCodeResponse, useCache: Bool)
    func getJediList(completionHandler: @escaping JediListResponse, useCache: Bool)
}

protocol LightSideScreenPresenterType {
    var view: LightSideScreenViewType? { get set }
    var interactor: LightSideScreenInteractorType? { get set }
    var router: LightSideScreenRouterType? { get set }
    var jediList: [LightSideScreenEntityType.Jedi]? { get }
    func viewDidAppear()
    func viewDidDisappear()
    func onDarkSideSelected()
}

protocol LightSideScreenEntityType {
    typealias JediCode = CodeModel
    typealias Jedi = JediModel
    typealias Error = ErrorResponse
    var jediCode: JediCode? { get set }
    var jediList: [Jedi]? { get set }
}

protocol LightSideScreenRouterType {
    static func create() -> UIViewController
    func routeToDarkSideScreen(from view: LightSideScreenViewType?)
}

typealias JediCodeResponse = (_ jediCode: LightSideScreenEntityType.JediCode?, _ error: LightSideScreenEntityType.Error?) -> Void
typealias JediListResponse = (_ jediList: [LightSideScreenEntityType.Jedi]?, _ error: LightSideScreenEntityType.Error?) -> Void
`;

// prettier-ignore
export const codeBlock2 =
`import UIKit

class LightSideScreenRouter: LightSideScreenRouterType {
    ...
}
`;

// prettier-ignore
export const codeBlock3 =
`class LightSideScreenRouter: LightSideScreenRouterType {
    static func create() -> UIViewController {
        let storyboard = UIStoryboard(name: "LightSideScreenView", bundle: .main)

        if let view = storyboard.instantiateViewController(withIdentifier: "LightSideScreenView")
            as? LightSideScreenView
        {
            let interactor = LightSideScreenInteractor()
            let presenter = LightSideScreenPresenter()
            let entity = LightSideScreenEntity()
            let router = LightSideScreenRouter()

            view.presenter = presenter
            interactor.entity = entity
            interactor.webService = FakeWebService()
            presenter.view = view
            presenter.interactor = interactor
            presenter.router = router

            return view
        }

        return UIViewController()
    }

    func routeToDarkSideScreen(from view: LightSideScreenViewType?) {
        if let view = view as? UIViewController,
            let navigationController = view.navigationController
        {
            navigationController.pushViewController(
                DarkSideScreenRouter.create(),
                animated: true
            )
        }
    }

}
`;

// prettier-ignore
export const codeBlock4 =
`class SceneDelegate: UIResponder, UIWindowSceneDelegate {
    var window: UIWindow?

    func scene(
        _ scene: UIScene,
        willConnectTo session: UISceneSession,
        options connectionOptions: UIScene.ConnectionOptions
    ) {
        guard let windowScene = scene as? UIWindowScene else { return }

        let navigationController = UINavigationController(
            rootViewController: LightSideScreenRouter.create()
        )

        let window = UIWindow(windowScene: windowScene)
        window.rootViewController = navigationController
        window.makeKeyAndVisible()
        self.window = window
    }

}
`;

// prettier-ignore
export const codeBlock5 =
`import UIKit

class LightSideScreenView: UIViewController {
    ...
}

extension LightSideScreenView: LightSideScreenViewType {
    ...
}

extension LightSideScreenView: UICollectionViewDataSource {
    ...
}

extension LightSideScreenView: UICollectionViewDelegateFlowLayout {
    ...
}
`;

// prettier-ignore
export const codeBlock6 =
`override func viewDidLoad() {
    ...
}

override func viewDidAppear(_ animated: Bool) {
    super.viewDidAppear(animated)
    presenter?.viewDidAppear()
}
`;

// prettier-ignore
export const codeBlock7 =
`func viewDidAppear() {
    view?.set(loading: true)
    interactorIsLoading = ["onJediCode": true, "onJediList": true]
    interactor?.getCode(completionHandler: onJediCode, useCache: true)
    interactor?.getJediList(completionHandler: onJediList, useCache: true)
}
`;

// prettier-ignore
export const codeBlock8 =
`private func onJediCode(
    _ jediCode: LightSideScreenEntityType.JediCode?,
    _ error: LightSideScreenEntityType.Error?)
{
    onLoaded(function: "onJediCode")

    if let jediCode = jediCode {
        view?.set(jediCode: jediCode)
    }
}

private func onJediList(
    _ jediList: [LightSideScreenEntityType.Jedi]?,
    _ error: LightSideScreenEntityType.Error?)
{
    onLoaded(function: "onJediList")

    if let jediList = jediList {
        lightSideScreenJediList = jediList
        view?.refreshJediList()
    }
}
`;

// prettier-ignore
export const codeBlock9 =
`view?.set(jediCode: jediCode)
`;

// prettier-ignore
export const codeBlock10 =
`view?.refreshJediList()
`;

// prettier-ignore
export const codeBlock11 =
`private func onLoaded(function: String) {
    ...
    view?.set(loading: false)
    ...
}
`;

// prettier-ignore
export const codeBlock12 =
`func onDarkSideSelected() {
    router?.routeToDarkSideScreen(from: view)
}
`;

// prettier-ignore
export const codeBlock13 =
`class LightSideScreenInteractor {
    ...
}

extension LightSideScreenInteractor: LightSideScreenInteractorType {
    ...

    func getJediList(completionHandler: @escaping JediListResponse, useCache: Bool) {
        if let cache = entity?.jediList,
            useCache == true
        {
            completionHandler(cache, nil)
            return
        }

        webService?.request(path: "light-side-service/jedi-list", method: "GET") {
            (result: Result<[LightSideScreenEntityType.Jedi]?, LightSideScreenEntityType.Error>) in
            switch result {
            case let .success(jediList):
                self.entity?.jediList = jediList
                completionHandler(jediList, nil)

            case let .failure(error):
                completionHandler(nil, error)
            }
        }
    }

    ...
}
`;

// prettier-ignore
export const codeBlock14 =
`case let .success(jediList):
    self.entity?.jediList = jediList
    completionHandler(jediList, nil)
`;

// prettier-ignore
export const codeBlock15 =
`protocol LightSideScreenEntityType {
    typealias JediCode = CodeModel
    typealias Jedi = JediModel
    typealias Error = ErrorResponse
    var jediCode: JediCode? { get set }
    var jediList: [Jedi]? { get set }
}
`;

// prettier-ignore
export const codeBlock16 =
`if let cache = entity?.jediList,
    useCache == true
{
    completionHandler(cache, nil)
    return
}
`;
